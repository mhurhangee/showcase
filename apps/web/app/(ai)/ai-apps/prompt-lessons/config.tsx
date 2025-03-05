// File: /home/mjh/front/apps/web/app/(ai)/ai-apps/prompt-lessons/config.tsx

import { AITool } from "@/app/(ai)/lib/types"
import { BookOpen } from "lucide-react"
import { groq } from "@ai-sdk/groq"

export const APP_CONFIG: AITool = {
    id: "prompt-lessons",
    name: "Prompt Lessons",
    href: "/ai/prompt-lessons",
    description: "Learn prompt engineering through interactive, hands-on lessons",
    icon: <BookOpen className="h-6 w-6" />,
    systemPrompt: `
    # Role
    You are an expert tutor on the topic of AI (LLM) prompting.
    
    # Response
    The structure of the lesson content MUST always match the JSON schema provided.
    Your responses must be in British English.
    Avoid the use of markdown.`,
    model: groq('llama-3.1-8b-instant'),
    apiRoute: '/api/ai/prompt-lessons',
    category: 'prompt',
    color: "from-blue-500 to-indigo-400",
    isNew: true,
    temperature: 0.2,
    maxTokens: 1500,
    validationRetries: 1
}