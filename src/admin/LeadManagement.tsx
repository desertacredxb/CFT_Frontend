import React, { useEffect, useState } from "react";
import axios from "axios";
import { Plus, Edit, Trash, X } from "lucide-react";
import { exportToExcel } from "../utils/exportToExcel";

// Updated to match backend Mongoose enum strictly
const STATUS_OPTIONS = [
  "new",
  "connected",
  "inProcess",
  "completed",
  "rejected",
];

interface Lead {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  marketSegment: string;
  status: string;
  createdAt?: string;
}

interface LeadManagementProps {
  baseURL: string;
}

export const LeadManagement: React.FC<LeadManagementProps> = ({ baseURL }) => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [currentLeads, setCurrentLeads] = useState<Lead[]>([]);

  const [filterDate, setFilterDate] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [leadSearchTerm, setLeadSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const leadsPerPage = 10;

  const [showModal, setShowModal] = useState(false);
  const [editingLead, setEditingLead] = useState<Lead | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    marketSegment: "",
    status: "new",
  });

  useEffect(() => {
    fetchLeads();
  }, [baseURL]);

  // FIXED: Extract array from res.data.data
  const fetchLeads = async () => {
    try {
      const res = await axios.get(`${baseURL}/api/leads`);
      if (res.data && res.data.data) {
        setLeads(res.data.data);
      } else {
        setLeads([]);
      }
    } catch (err) {
      console.error("Error fetching leads:", err);
    }
  };

  useEffect(() => {
    let result = leads;

    if (filterDate) {
      const selectedDate = new Date(filterDate).toDateString();
      result = result.filter(
        (lead) =>
          lead.createdAt &&
          new Date(lead.createdAt).toDateString() === selectedDate,
      );
    }

    if (filterStatus) {
      result = result.filter(
        (lead) =>
          (lead.status || "new").toLowerCase() === filterStatus.toLowerCase(),
      );
    }

    if (leadSearchTerm.trim() !== "") {
      const term = leadSearchTerm.toLowerCase();
      result = result.filter(
        (lead) =>
          (lead.fullName && lead.fullName.toLowerCase().includes(term)) ||
          (lead.email && lead.email.toLowerCase().includes(term)) ||
          (lead.phone && lead.phone.includes(term)) ||
          (lead.city && lead.city.toLowerCase().includes(term)),
      );
    }

    setFilteredLeads(result);
    setCurrentPage(1);
  }, [filterDate, filterStatus, leadSearchTerm, leads]);

  useEffect(() => {
    const indexOfLastLead = currentPage * leadsPerPage;
    const indexOfFirstLead = indexOfLastLead - leadsPerPage;
    setCurrentLeads(filteredLeads.slice(indexOfFirstLead, indexOfLastLead));
  }, [filteredLeads, currentPage]);

  const totalPages = Math.ceil(filteredLeads.length / leadsPerPage);

  const handleStatusChange = async (leadId: string, newStatus: string) => {
    try {
      setLeads((prevLeads) =>
        prevLeads.map((lead) =>
          lead._id === leadId ? { ...lead, status: newStatus } : lead,
        ),
      );

      await axios.put(`${baseURL}/api/leads/${leadId}`, { status: newStatus });
    } catch (err) {
      console.error("Error updating status:", err);
      alert("Failed to update status");
      fetchLeads();
    }
  };

  const handleOpenModal = (lead: Lead | null = null) => {
    if (lead) {
      setEditingLead(lead);
      setFormData({
        fullName: lead.fullName || "",
        email: lead.email || "",
        phone: lead.phone || "",
        city: lead.city || "",
        marketSegment: lead.marketSegment || "",
        status: lead.status || "new",
      });
    } else {
      setEditingLead(null);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        marketSegment: "",
        status: "new",
      });
    }
    setShowModal(true);
  };

  const handleSaveLead = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingLead) {
        await axios.put(`${baseURL}/api/leads/${editingLead._id}`, formData);
        alert("Lead updated successfully");
      } else {
        await axios.post(`${baseURL}/api/leads`, formData);
        alert("Lead created successfully");
      }
      setShowModal(false);
      fetchLeads();
    } catch (err) {
      console.error("Error saving lead:", err);
      alert("Failed to save lead");
    }
  };

  const handleDeleteLead = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this lead?")) return;
    try {
      await axios.delete(`${baseURL}/api/leads/${id}`);
      alert("Lead deleted successfully");
      fetchLeads();
    } catch (err) {
      console.error("Error deleting lead:", err);
      alert("Failed to delete lead");
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300";
      case "connected":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300";
      case "inProcess":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300";
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300";
      case "rejected":
        return "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <section className="bg-gray-100 dark:bg-neutral-900 p-6 rounded-xl border border-gray-200 dark:border-neutral-800">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold">Lead Management</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Create, view, update status, and manage incoming leads.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleOpenModal()}
            className="flex items-center gap-2 px-3.5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
          >
            <Plus className="w-4 h-4" /> Add Lead
          </button>
          <button
            onClick={() =>
              exportToExcel(
                `Leads_Export_${new Date().toLocaleDateString()}`,
                filteredLeads,
                [
                  "Name",
                  "Email",
                  "Phone",
                  "City",
                  "Segment",
                  "Status",
                  "Created At",
                ],
                [
                  "fullName",
                  "email",
                  "phone",
                  "city",
                  "marketSegment",
                  "status",
                  "createdAt",
                ],
              )
            }
            className="px-3.5 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition"
          >
            Export Excel
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-xs font-semibold mb-1 uppercase tracking-wider text-gray-500">
            Search
          </label>
          <input
            type="text"
            placeholder="Name, email, phone, city..."
            value={leadSearchTerm}
            onChange={(e) => setLeadSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-800 dark:border-neutral-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1 uppercase tracking-wider text-gray-500">
            Status
          </label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-800 dark:border-neutral-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Statuses</option>
            {STATUS_OPTIONS.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1 uppercase tracking-wider text-gray-500">
            Date
          </label>
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-800 dark:border-neutral-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-end">
          <button
            onClick={() => {
              setFilterDate("");
              setFilterStatus("");
              setLeadSearchTerm("");
            }}
            className="w-full px-3 py-2 bg-gray-200 dark:bg-neutral-800 text-sm rounded-lg hover:bg-gray-300 dark:hover:bg-neutral-700 transition"
          >
            Reset Filters
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-neutral-800">
        <table className="w-full text-left text-sm divide-y divide-gray-200 dark:divide-neutral-800">
          <thead className="bg-gray-200 dark:bg-neutral-800 font-semibold">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Phone</th>
              <th className="py-3 px-4">City</th>
              <th className="py-3 px-4">Segment</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-neutral-800 bg-white dark:bg-neutral-900">
            {currentLeads.length > 0 ? (
              currentLeads.map((lead) => (
                <tr
                  key={lead._id}
                  className="hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition"
                >
                  <td className="py-3 px-4 font-medium">{lead.fullName}</td>
                  <td className="py-3 px-4">{lead.email}</td>
                  <td className="py-3 px-4">{lead.phone}</td>
                  <td className="py-3 px-4">{lead.city}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-md">
                      {lead.marketSegment || "N/A"}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <select
                      value={lead.status || "new"}
                      onChange={(e) =>
                        handleStatusChange(lead._id, e.target.value)
                      }
                      className={`text-xs font-semibold px-2.5 py-1 rounded-md border-0 cursor-pointer focus:ring-2 focus:ring-blue-500 ${getStatusBadgeClass(
                        lead.status || "new",
                      )}`}
                    >
                      {STATUS_OPTIONS.map((opt) => (
                        <option
                          key={opt}
                          value={opt}
                          className="bg-white text-black dark:bg-neutral-900 dark:text-white"
                        >
                          {opt}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="py-3 px-4 text-xs text-gray-500">
                    {lead.createdAt
                      ? new Date(lead.createdAt).toLocaleDateString()
                      : "N/A"}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center justify-center gap-3">
                      <button
                        onClick={() => handleOpenModal(lead)}
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteLead(lead._id)}
                        className="text-red-600 hover:text-red-800 dark:text-red-400"
                      >
                        <Trash className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center py-6 text-gray-500">
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200 dark:border-neutral-800">
          <span className="text-xs text-gray-500">
            Page {currentPage} of {totalPages}
          </span>
          <div className="flex gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="px-3 py-1 border rounded-md text-xs disabled:opacity-50"
            >
              Previous
            </button>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-3 py-1 border rounded-md text-xs disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 w-full max-w-md rounded-xl shadow-xl overflow-hidden">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-neutral-800">
              <h3 className="font-bold">
                {editingLead ? "Edit Lead" : "Add Lead"}
              </h3>
              <button onClick={() => setShowModal(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSaveLead} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-800 dark:border-neutral-700 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-800 dark:border-neutral-700 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-800 dark:border-neutral-700 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">City</label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-800 dark:border-neutral-700 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">
                  Market Segment
                </label>
                <input
                  type="text"
                  value={formData.marketSegment}
                  onChange={(e) =>
                    setFormData({ ...formData, marketSegment: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-800 dark:border-neutral-700 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-800 dark:border-neutral-700 text-sm"
                >
                  {STATUS_OPTIONS.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-neutral-800">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded-lg text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
