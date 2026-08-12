/**
 * Requires (npm i):
 * @tiptap/react @tiptap/pm @tiptap/starter-kit @tiptap/extension-underline
 * @tiptap/extension-link @tiptap/extension-image @tiptap/extension-text-align
 * @tiptap/extension-text-style @tiptap/extension-color @tiptap/extension-highlight
 * @tiptap/extension-table @tiptap/extension-table-row @tiptap/extension-table-cell
 * @tiptap/extension-table-header @tiptap/extension-placeholder
 * @tiptap/extension-character-count lucide-react
 */
import { useEffect, useRef, useState } from "react";
import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import { Table } from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import Placeholder from "@tiptap/extension-placeholder";
import CharacterCount from "@tiptap/extension-character-count";
import {
  Bold, Italic, Underline as UnderlineIcon, Strikethrough, Link2, Unlink,
  Image as ImageIcon, Table as TableIcon, Undo2, Redo2, List, ListOrdered,
  Quote, AlignLeft, AlignCenter, AlignRight, Code2, Eye, EyeOff, Minus,
  X, Trash2, Rows3, Columns3, Palette, Highlighter, Loader2, UploadCloud,
} from "lucide-react";
import "../index.css";

import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import prettier from "prettier/standalone";
import * as parserHtml from "prettier/plugins/html";

const baseURL = import.meta.env.VITE_API_BASE_URL;

interface BlogPost {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  tags?: string;
  coverImage?: string;
}

const HEADING_OPTIONS = [
  { label: "Paragraph", value: "paragraph" },
  { label: "Heading 1", value: "1" },
  { label: "Heading 2", value: "2" },
  { label: "Heading 3", value: "3" },
  { label: "Heading 4", value: "4" },
];

/* ---------------------------------- Toolbar ---------------------------------- */

const ToolbarBtn = ({
  onClick,
  active,
  disabled,
  title,
  children,
}: {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  title: string;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    title={title}
    disabled={disabled}
    onClick={onClick}
    className={`inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors
      disabled:opacity-30 disabled:cursor-not-allowed
      ${active ? "bg-indigo-600 text-white" : "text-slate-600 hover:bg-slate-100"}`}
  >
    {children}
  </button>
);

const Divider = () => <div className="mx-1 h-6 w-px bg-slate-200" />;

function EditorToolbar({
  editor,
  sourceMode,
  onToggleSource,
  showPreview,
  onTogglePreview,
}: {
  editor: Editor | null;
  sourceMode: boolean;
  onToggleSource: () => void;
  showPreview: boolean;
  onTogglePreview: () => void;
}) {
  const [linkOpen, setLinkOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const linkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (linkRef.current && !linkRef.current.contains(e.target as Node)) setLinkOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!editor) return null;

  const openLinkMenu = () => {
    const prev = editor.getAttributes("link").href || "";
    setLinkUrl(prev);
    setLinkOpen(true);
  };

  const applyLink = () => {
    if (!linkUrl.trim()) {
      editor.chain().focus().unsetLink().run();
    } else {
      editor.chain().focus().extendMarkRange("link").setLink({ href: linkUrl.trim() }).run();
    }
    setLinkOpen(false);
  };

  const insertImage = () => {
    const src = window.prompt("Image URL");
    if (!src) return;
    const alt = window.prompt("Alt text (for SEO & accessibility)") || "";
    editor.chain().focus().setImage({ src, alt }).run();
  };

  const insertTable = () =>
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();

  const inTable = editor.isActive("table");

  return (
    <div className="sticky top-0 z-10 rounded-t-xl border-b border-slate-200 bg-white/95 backdrop-blur px-2 py-1.5">
      <div className="flex flex-wrap items-center gap-0.5">
        <ToolbarBtn title="Undo" onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}>
          <Undo2 size={16} />
        </ToolbarBtn>
        <ToolbarBtn title="Redo" onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}>
          <Redo2 size={16} />
        </ToolbarBtn>

        <Divider />

        <select
          className="h-8 rounded-md border-0 bg-transparent px-1 text-sm text-slate-700 hover:bg-slate-100 focus:outline-none"
          value={
            editor.isActive("heading", { level: 1 }) ? "1" :
              editor.isActive("heading", { level: 2 }) ? "2" :
                editor.isActive("heading", { level: 3 }) ? "3" :
                  editor.isActive("heading", { level: 4 }) ? "4" : "paragraph"
          }
          onChange={(e) => {
            const v = e.target.value;
            if (v === "paragraph") editor.chain().focus().setParagraph().run();
            else editor.chain().focus().toggleHeading({ level: Number(v) as 1 | 2 | 3 | 4 }).run();
          }}
        >
          {HEADING_OPTIONS.map((h) => (
            <option key={h.value} value={h.value}>{h.label}</option>
          ))}
        </select>

        <Divider />

        <ToolbarBtn title="Bold" active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}>
          <Bold size={16} />
        </ToolbarBtn>
        <ToolbarBtn title="Italic" active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}>
          <Italic size={16} />
        </ToolbarBtn>
        <ToolbarBtn title="Underline" active={editor.isActive("underline")} onClick={() => editor.chain().focus().toggleUnderline().run()}>
          <UnderlineIcon size={16} />
        </ToolbarBtn>
        <ToolbarBtn title="Strikethrough" active={editor.isActive("strike")} onClick={() => editor.chain().focus().toggleStrike().run()}>
          <Strikethrough size={16} />
        </ToolbarBtn>

        <Divider />

        <label className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-slate-600 hover:bg-slate-100" title="Text color">
          <Palette size={16} />
          <input
            type="color"
            className="h-0 w-0 opacity-0"
            onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
          />
        </label>
        <label className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-slate-600 hover:bg-slate-100" title="Highlight">
          <Highlighter size={16} />
          <input
            type="color"
            className="h-0 w-0 opacity-0"
            onChange={(e) => editor.chain().focus().toggleHighlight({ color: e.target.value }).run()}
          />
        </label>

        <Divider />

        <ToolbarBtn title="Align left" active={editor.isActive({ textAlign: "left" })} onClick={() => editor.chain().focus().setTextAlign("left").run()}>
          <AlignLeft size={16} />
        </ToolbarBtn>
        <ToolbarBtn title="Align center" active={editor.isActive({ textAlign: "center" })} onClick={() => editor.chain().focus().setTextAlign("center").run()}>
          <AlignCenter size={16} />
        </ToolbarBtn>
        <ToolbarBtn title="Align right" active={editor.isActive({ textAlign: "right" })} onClick={() => editor.chain().focus().setTextAlign("right").run()}>
          <AlignRight size={16} />
        </ToolbarBtn>

        <Divider />

        <ToolbarBtn title="Bullet list" active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()}>
          <List size={16} />
        </ToolbarBtn>
        <ToolbarBtn title="Numbered list" active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
          <ListOrdered size={16} />
        </ToolbarBtn>
        <ToolbarBtn title="Quote" active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
          <Quote size={16} />
        </ToolbarBtn>
        <ToolbarBtn title="Code block" active={editor.isActive("codeBlock")} onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
          <Code2 size={16} />
        </ToolbarBtn>
        <ToolbarBtn title="Horizontal rule" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          <Minus size={16} />
        </ToolbarBtn>

        <Divider />

        <div className="relative" ref={linkRef}>
          <ToolbarBtn title="Insert link" active={editor.isActive("link")} onClick={openLinkMenu}>
            <Link2 size={16} />
          </ToolbarBtn>
          {linkOpen && (
            <div className="absolute left-0 top-9 z-20 w-64 rounded-lg border border-slate-200 bg-white p-2 shadow-lg">
              <input
                autoFocus
                type="url"
                placeholder="https://example.com"
                className="w-full rounded-md border border-slate-200 px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && applyLink()}
              />
              <div className="mt-2 flex justify-end gap-2">
                {editor.isActive("link") && (
                  <button
                    type="button"
                    className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-red-600 hover:bg-red-50"
                    onClick={() => { editor.chain().focus().unsetLink().run(); setLinkOpen(false); }}
                  >
                    <Unlink size={12} /> Remove
                  </button>
                )}
                <button type="button" className="rounded-md bg-indigo-600 px-3 py-1 text-xs font-medium text-white hover:bg-indigo-700" onClick={applyLink}>
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>

        <ToolbarBtn title="Insert image" onClick={insertImage}>
          <ImageIcon size={16} />
        </ToolbarBtn>
        <ToolbarBtn title="Insert table" onClick={insertTable}>
          <TableIcon size={16} />
        </ToolbarBtn>

        <div className="ml-auto flex items-center gap-0.5">
          <ToolbarBtn title={showPreview ? "Hide preview" : "Preview"} active={showPreview} onClick={onTogglePreview}>
            {showPreview ? <EyeOff size={16} /> : <Eye size={16} />}
          </ToolbarBtn>
          <ToolbarBtn title={sourceMode ? "Visual editor" : "View HTML source"} active={sourceMode} onClick={onToggleSource}>
            <Code2 size={16} />
          </ToolbarBtn>
        </div>
      </div>

      {inTable && !sourceMode && (
        <div className="mt-1.5 flex flex-wrap items-center gap-0.5 border-t border-slate-100 pt-1.5">
          <span className="mr-1 text-[11px] font-medium uppercase tracking-wide text-slate-400">Table</span>
          <ToolbarBtn title="Add column before" onClick={() => editor.chain().focus().addColumnBefore().run()}><Columns3 size={14} /></ToolbarBtn>
          <ToolbarBtn title="Add column after" onClick={() => editor.chain().focus().addColumnAfter().run()}><Columns3 size={14} /></ToolbarBtn>
          <ToolbarBtn title="Delete column" onClick={() => editor.chain().focus().deleteColumn().run()}><Trash2 size={14} /></ToolbarBtn>
          <Divider />
          <ToolbarBtn title="Add row before" onClick={() => editor.chain().focus().addRowBefore().run()}><Rows3 size={14} /></ToolbarBtn>
          <ToolbarBtn title="Add row after" onClick={() => editor.chain().focus().addRowAfter().run()}><Rows3 size={14} /></ToolbarBtn>
          <ToolbarBtn title="Delete row" onClick={() => editor.chain().focus().deleteRow().run()}><Trash2 size={14} /></ToolbarBtn>
          <Divider />
          <ToolbarBtn title="Merge/split cells" onClick={() => editor.chain().focus().mergeOrSplit().run()}><TableIcon size={14} /></ToolbarBtn>
          <ToolbarBtn title="Delete table" onClick={() => editor.chain().focus().deleteTable().run()}><X size={14} /></ToolbarBtn>
        </div>
      )}
    </div>
  );
}

/* ---------------------------------- Field helpers ---------------------------------- */

const FieldLabel = ({ children, hint }: { children: React.ReactNode; hint?: string }) => (
  <div className="mb-1.5 flex items-baseline justify-between">
    <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">{children}</label>
    {hint && <span className="text-[11px] text-slate-400">{hint}</span>}
  </div>
);

const inputCls =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-colors";

/* ---------------------------------- Main component ---------------------------------- */

const AddBlog = ({
  onClose,
  onSuccess,
  existingBlog = null,
}: {
  onClose: () => void;
  onSuccess: () => void;
  existingBlog?: BlogPost | null;
}) => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author: "",
    tags: "",
    coverImage: null as File | null,
    schemaMarkup: [""],
  });

  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [sourceMode, setSourceMode] = useState(false);
  const [sourceHtml, setSourceHtml] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: { rel: "noopener noreferrer", target: "_blank", class: "text-indigo-600 underline" },
      }),
      Image.configure({ HTMLAttributes: { class: "rounded-lg max-w-full" } }),
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      Placeholder.configure({ placeholder: "Start writing your SEO-optimized blog post…" }),
      CharacterCount,
    ],
    content: "",
    editorProps: {
      attributes: { class: "blog-prose min-h-[360px] px-4 py-3 focus:outline-none" },
    },
    onUpdate: ({ editor }) => {
      setFormData((prev) => ({ ...prev, content: editor.getHTML() }));
    },
  });

  useEffect(() => {
    if (existingBlog) {
      setFormData({
        title: existingBlog.title,
        slug: existingBlog.slug,
        excerpt: existingBlog.excerpt,
        content: existingBlog.content,
        author: existingBlog.author,
        tags: existingBlog.tags || "",
        coverImage: null,
        schemaMarkup: Array.isArray((existingBlog as any).schemaMarkup)
          ? (existingBlog as any).schemaMarkup
          : [(existingBlog as any).schemaMarkup || ""],
      });
      if (existingBlog.coverImage) setCoverPreview(existingBlog.coverImage);
      editor?.commands.setContent(existingBlog.content || "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [existingBlog, editor]);

  const toggleSourceMode = async () => {
    if (!editor) return;
    if (!sourceMode) {
      setShowPreview(false)
      const html = editor.getHTML();
      const formatted = await formatHtml(html);
      setSourceHtml(formatted);
      setSourceMode(true);
    } else {
      editor.commands.setContent(sourceHtml);
      setFormData((prev) => ({ ...prev, content: sourceHtml }));
      setSourceMode(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "title" && !existingBlog) {
      const autoSlug = value
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .trim()
        .replace(/\s+/g, "-");

      setFormData((prev) => ({ ...prev, title: value, slug: autoSlug }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFormData((prev) => ({ ...prev, coverImage: file }));
    setCoverPreview(URL.createObjectURL(file));
  };

  const removeCoverImage = () => {
    setFormData((prev) => ({ ...prev, coverImage: null }));
    setCoverPreview(existingBlog?.coverImage || null);
  };

  const updateSchema = (index: number, value: string) => {
    const next = [...formData.schemaMarkup];
    next[index] = value;
    setFormData((prev) => ({ ...prev, schemaMarkup: next }));
  };

  const removeSchema = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      schemaMarkup: prev.schemaMarkup.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const blogData = new FormData();
      blogData.append("title", formData.title);
      blogData.append("slug", formData.slug);
      blogData.append("excerpt", formData.excerpt);
      blogData.append("content", formData.content);
      blogData.append("author", formData.author);
      blogData.append("tags", formData.tags);

      if (formData.coverImage) {
        blogData.append("coverImage", formData.coverImage);
      }

      formData.schemaMarkup.forEach((markup) => {
        if (markup?.trim()) blogData.append("schemaMarkup", markup.trim());
      });

      const res = await fetch(
        existingBlog
          ? `${baseURL}/api/blogs/${existingBlog.slug}`
          : `${baseURL}/api/blogs/add`,
        { method: existingBlog ? "PUT" : "POST", body: blogData }
      );

      const data = await res.json();
      if (res.ok) {
        onSuccess();
        onClose();
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (err) {
      alert("Network or server error");
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const words = editor?.storage.characterCount?.words() ?? 0;
  const chars = editor?.storage.characterCount?.characters() ?? 0;
  const readingTime = Math.max(1, Math.round(words / 200));


  const formatHtml = async (html: string) => {
    try {
      return await prettier.format(html, {
        parser: "html",
        plugins: [parserHtml],
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
      });
    } catch (error) {
      console.error("HTML formatting failed:", error);
      return html;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
      <div className="flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              {existingBlog ? "Edit blog post" : "Add new blog post"}
            </h2>
            <p className="text-xs text-slate-400">
              {words} words · {chars} characters · ~{readingTime} min read
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-1 flex-col overflow-hidden">
          <div className="grid flex-1 grid-cols-1 gap-6 overflow-y-auto px-6 py-5 lg:grid-cols-3">
            {/* Main column */}
            <div className="space-y-5 lg:col-span-2">
              <div>
                <FieldLabel hint={`${formData.title.length}/60`}>Title</FieldLabel>
                <input
                  type="text"
                  name="title"
                  placeholder="How to choose the perfect diamond ring"
                  className={inputCls}
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <FieldLabel>Slug</FieldLabel>
                <div className="flex items-center overflow-hidden rounded-lg border border-slate-200 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100">
                  <span className="whitespace-nowrap bg-slate-50 px-3 py-2 text-sm text-slate-400">/blog/</span>
                  <input
                    type="text"
                    name="slug"
                    className="w-full px-2 py-2 text-sm text-slate-900 focus:outline-none"
                    value={formData.slug}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <FieldLabel>Content</FieldLabel>
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <EditorToolbar
                    editor={editor}
                    sourceMode={sourceMode}
                    onToggleSource={toggleSourceMode}
                    showPreview={showPreview}
                    onTogglePreview={() => {setShowPreview((s) => !s); setSourceMode(false)}}
                  />

                  {showPreview ? (
                    <div className="blog-prose max-h-[480px] overflow-y-auto px-4 py-3" dangerouslySetInnerHTML={{ __html: formData.content }} />
                  ) : sourceMode ? (
                    <>
                      {/* <textarea
                        className="min-h-[360px] w-full resize-y bg-slate-900 px-4 py-3 font-mono text-[13px] text-emerald-300 focus:outline-none"
                        value={sourceHtml}
                        onChange={(e) => setSourceHtml(e.target.value)}
                        spellCheck={false}
                      /> */}
                      <CodeMirror
                        value={sourceHtml}
                        height="360px"
                        extensions={[html()]}
                        onChange={(value) => setSourceHtml(value)}
                        theme="dark"
                        basicSetup={{
                          lineNumbers: true,
                          foldGutter: true,
                          highlightActiveLine: true,
                          bracketMatching: true,
                          closeBrackets: true,
                          autocompletion: true,
                        }}
                        className="overflow-hidden"
                      />
                      <style>
                        {`
                        .cm-editor .cm-scroller::-webkit-scrollbar {
                            height: 6px;
                          }

                          .cm-editor .cm-scroller::-webkit-scrollbar-track {
                            background: transparent;
                          }

                          .cm-editor .cm-scroller::-webkit-scrollbar-thumb {
                            background: #64748b;
                            border-radius: 999px;
                          }
                        `}
                      </style>
                    </>
                  ) : (
                    <EditorContent editor={editor} className="max-h-[480px] overflow-y-auto" />
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar column */}
            <div className="space-y-5">
              <div>
                <FieldLabel hint={`${formData.excerpt.length}/160`}>Meta description</FieldLabel>
                <textarea
                  name="excerpt"
                  rows={3}
                  placeholder="Shown in search results — keep it under 160 characters."
                  className={inputCls}
                  value={formData.excerpt}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <FieldLabel>Author</FieldLabel>
                <input
                  type="text"
                  name="author"
                  placeholder="Author name"
                  className={inputCls}
                  value={formData.author}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <FieldLabel>Tags</FieldLabel>
                <input
                  type="text"
                  name="tags"
                  placeholder="rings, diamonds, gifting"
                  className={inputCls}
                  value={formData.tags}
                  onChange={handleChange}
                />
              </div>

              <div>
                <FieldLabel>Cover image</FieldLabel>
                {coverPreview ? (
                  <div className="relative overflow-hidden rounded-lg border border-slate-200">
                    <img src={coverPreview} alt="Cover preview" className="h-36 w-full object-cover" />
                    <button
                      type="button"
                      onClick={removeCoverImage}
                      className="absolute right-2 top-2 rounded-full bg-white/90 p-1 text-slate-600 shadow hover:text-red-600"
                      title="Remove image"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ) : (
                  <label className="flex h-36 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-slate-200 text-slate-400 hover:border-indigo-400 hover:text-indigo-500">
                    <UploadCloud size={22} />
                    <span className="text-xs font-medium">Click to upload</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                      required={!existingBlog}
                    />
                  </label>
                )}
              </div>

              <details className="rounded-lg border border-slate-200 open:pb-2">
                <summary className="cursor-pointer select-none px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Schema markup (JSON-LD)
                </summary>
                <div className="space-y-2 px-3">
                  {formData.schemaMarkup.map((markup, index) => (
                    <div key={index} className="relative">
                      <textarea
                        rows={4}
                        placeholder="Paste JSON-LD…"
                        className="w-full resize-y rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2 font-mono text-[12px] text-slate-700 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
                        value={markup}
                        onChange={(e) => updateSchema(index, e.target.value)}
                      />
                      {formData.schemaMarkup.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeSchema(index)}
                          className="absolute right-2 top-2 text-slate-400 hover:text-red-600"
                        >
                          <Trash2 size={13} />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    className="text-xs font-medium text-indigo-600 hover:underline"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, schemaMarkup: [...prev.schemaMarkup, ""] }))
                    }
                  >
                    + Add another schema block
                  </button>
                </div>
              </details>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 border-t border-slate-100 px-6 py-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              {submitting && <Loader2 size={15} className="animate-spin" />}
              {submitting
                ? existingBlog ? "Updating…" : "Publishing…"
                : existingBlog ? "Update post" : "Publish post"}
            </button>
          </div>
        </form>
      </div>

      <style>{`
        .blog-prose { font-size: 0.95rem; line-height: 1.75; color: #1e293b; }
        .blog-prose h1 { font-size: 1.75rem; font-weight: 700; margin: 1em 0 0.5em; }
        .blog-prose h2 { font-size: 1.4rem; font-weight: 700; margin: 1em 0 0.5em; }
        .blog-prose h3 { font-size: 1.15rem; font-weight: 600; margin: 1em 0 0.4em; }
        .blog-prose h4 { font-size: 1rem; font-weight: 600; margin: 1em 0 0.4em; }
        .blog-prose p { margin: 0.6em 0; }
        .blog-prose ul { list-style: disc; padding-left: 1.4em; margin: 0.6em 0; }
        .blog-prose ol { list-style: decimal; padding-left: 1.4em; margin: 0.6em 0; }
        .blog-prose blockquote { border-left: 3px solid #6366f1; padding-left: 1em; color: #475569; font-style: italic; margin: 0.8em 0; }
        .blog-prose pre { background: #0f172a; color: #6ee7b7; padding: 0.9em 1em; border-radius: 0.5em; overflow-x: auto; font-size: 0.85em; margin: 0.8em 0; }
        .blog-prose code { background: #f1f5f9; padding: 0.15em 0.4em; border-radius: 0.3em; font-size: 0.85em; }
        .blog-prose pre code { background: none; padding: 0; }
        .blog-prose a { color: #4f46e5; text-decoration: underline; }
        .blog-prose img { border-radius: 0.6em; max-width: 100%; margin: 0.8em 0; }
        .blog-prose hr { border: none; border-top: 1px solid #e2e8f0; margin: 1.5em 0; }
        .blog-prose table { border-collapse: collapse; width: 100%; margin: 0.8em 0; font-size: 0.9em; }
        .blog-prose th, .blog-prose td { border: 1px solid #e2e8f0; padding: 0.5em 0.7em; }
        .blog-prose th { background: #f8fafc; font-weight: 600; }
        .blog-prose p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          color: #94a3b8;
          float: left;
          height: 0;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default AddBlog;