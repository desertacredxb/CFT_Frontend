export interface ChatMessage {
    id:number;
    role:"user"|"assistant";
    text:string;
    createdAt:string;
}

export interface ChatState{

    messages:ChatMessage[];

    loading:boolean;

    isOpen:boolean;

}

export interface OpenAIMessage {
    role: "user" | "assistant";
    content: string;
}