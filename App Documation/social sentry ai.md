# 🤖 SocialSentry AI Architecture & Documentation

This document explains in detail how artificial intelligence is integrated into the SocialSentry app, the models used, current features, and how you can expand them in the future.

---

## 🏗️ Core AI Architecture: How it Works

SocialSentry uses a **Dual-LLM Architecture** for high availability, speed, and cost-effectiveness. The core logic is orchestrated by `SocialSentryAIService.kt`, which acts as a bridge between the app and the AI models.

### 1. Primary AI: Groq (Llama 3)
- **Model Used**: `llama-3.1-8b-instant`
- **Why**: Groq uses LPUs (Language Processing Units) that provide blazing fast responses. This is critical for real-time chat with the Hakari assistant and rapid issue analysis.
- **Service**: `GroqAIService.kt`
- **Fallback Logic**: If Groq fails (e.g., servers are busy or rate limits are hit), the service catches the failure and immediately falls back to Gemini.

### 2. Fallback & Analysis AI: Google Gemini
- **Model Used**: `gemini-2.5-flash-lite`
- **Why**: Gemini acts as a highly reliable fallback. It handles longer context windows natively and is backed by Google's infrastructure. 
- **Service**: `GeminiAIService.kt`
- **Key Manager**: `GeminiKeyManager.kt` rotates through multiple API keys (`GEMINI_API_KEY_1`, `GEMINI_API_KEY_2`, etc.) automatically to bypass severe rate limits.

### 3. On-Device ML: NSFW Shield
- **Model Used**: Custom TensorFlow Lite Model (`nsfw/NSFWDetector.kt`) + ML Kit Pose Detection.
- **Why**: Privacy-preserving image analysis that runs entirely on the user's phone. No images are sent to the cloud.

---

## 🧠 Current AI Features ("How many things it have")

The app currently implements the following AI-driven components:

### 1. Hakari AI Assistant (WaifuEngine)
- **What it is**: A virtual companion character that motivates users, checks if safety features are disabled, and provides interactive chat.
- **How it works**: Uses `chatWithHakari` in the AI Service. It takes the conversation history, screen time minutes, and the user's message, and responds in Hakari's character persona.
- **Persistence**: Now utilizes **Room Database** (`HakariDatabase.kt`) to store entire conversation threads (`ConversationEntity`) and message history (`ChatMessageEntity`). This enables a "ChatGPT-like" continuity where users can return to previous chats.
- **Context Handling**: Implements a **State-Aware Context Strategy**:
  - **First Message**: Injects comprehensive system prompts and user stats (rank, streak, total distracted time) to set the tone.
  - **Follow-up Turns**: Uses a "Lean Context" approach, sending only recent message history and minimal system instructions to save on API tokens and reduce latency.
- **Tech**: Groq Primary 🟢 -> Gemini Fallback 🟡.

### 2. Smart Issue Analyzer
- **What it is**: Analyzes bug reports and feedback submitted by users through the Community screen.
- **How it works**: Uses `analyzeIssue` to categorize the issue (`bug`, `feature_request`, `confusion`), assign a `priority`, and generate an `auto_reply`.
- **Duplicate Detection**: Uses `findSimilarIssues` to compare new reports with existing ones and prevent duplicate tickets.

### 3. MyBrain Dashboard (Analytical AI)
- **What it is**: Analyzes the user's app usage stats to calculate a "Dopamine Score" and "Cognitive Readiness".
- **How it works**: Differentiates between total screen time and destructive social media time. It generates specific "Brain States" (e.g., Dopamine Overload) and provides actionable prescriptions.

### 4. NSFW AI Shield (Vision AI)
- **What it is**: Real-time screening of images on the screen (in supported apps like Reddit, Telegram, Twitter) to detect adult content.
- **How it works**: Uses an on-device TensorFlow block to blur or overlay unsafe images instantly based on a sensitivity slider (`0.0 - 1.0`).

---

## 🚀 Future Integrations & What You Can Build ("What I can do")

Here are the things you can easily add to the AI system to make SocialSentry even more powerful:

### 1. Multi-Modal Vision Analysis (Gemini)
- **Current State**: Gemini is only used for text.
- **What you can add**: Pass screenshots of the user's screen to Gemini (using `gemini-2.5-flash` instead of `lite`) and ask it: *"Is the user currently distracted? Give me a 1-10 distraction score."* This can be used for deep contextual blocking.

### 2. Daily Summary Generator
- **What you can add**: A scheduled worker that passes the user's daily app usage limits, Relapse History, and Strike/Streak record to Hakari at 8:00 PM.
- **Result**: Hakari sends a personalized, dynamic push notification analyzing their day (e.g., *"You did great today blocking Insta, but you relapsed on Chrome. Let's fix that tomorrow!"*).

### 3. Advanced Groq Models for Coding/Logic
- **Current State**: Using `8b-instant`.
- **What you can add**: For complex server-side analysis or text summarization of community posts, you can upgrade specific endpoints to Groq's `llama-3.3-70b-versatile`.

### 4. Dynamic Force Mode Scheduling
- **What you can add**: Feed the user's usage patterns to the AI. Let the AI automatically suggest the most productive times of day for the user to schedule "Force Mode" based on when they usually waste the most time.

### 5. AI Voice (Text-to-Speech)
- **What you can add**: Integrate a TTS API (like ElevenLabs or Google TTS). When the user opens the app, Hakari can physically speak her motivational lines generated by the LLM.

---

## 🛠️ Summary for Developers

1. **How to add a new AI endpoint**:
   - Add the specific prompt generation logic to `GroqAIService.kt`.
   - Add the identical fallback logic to `GeminiAIService.kt`.
   - Wrap both of them in `SocialSentryAIService.kt` where Groq is called first, and if `null` or error is returned, Gemini is triggered.

2. **Keys**: Make sure your `.env` file has `GROQ_API_KEY` and the `GEMINI_API_KEY_#` series filled out, otherwise the services will fail gracefully but render Hakari unresponsive.

---

## 📦 AI Persistence Layer (Room DB)

The app implements a structured persistence layer for AI conversations using Room.

### Database Components:
| Component | File | Responsibility |
|---|---|---|
| `HakariDatabase` | `data/local/HakariDatabase.kt` | The main Room database holding AI tables. |
| `ConversationDao` | `data/local/dao/ConversationDao.kt` | CRUD for chat threads (Rename, Delete, Fetch All). |
| `ChatMessageDao` | `data/local/dao/ChatMessageDao.kt` | Message retrieval and insertion, linked to parent conversations. |
| `ConversationEntity`| `data/local/entity/ConversationEntity.kt`| Stores thread title, last message preview, and update timestamp. |
| `ChatMessageEntity` | `data/local/entity/ChatMessageEntity.kt` | Stores message content, role (USER/AI), and timestamp. |

### History Management Logic:
- **Auto-Naming**: The first message in a new chat triggers an AI-generated title for the conversation (via a background Groq call).
- **Thread Deletion**: Deleting a conversation uses a `CASCADE` delete in the database to automatically wipe all associated messages.
- **Clear All History**: The "Clear All History" feature performs a vacuum-like wipe of all entities to ensure privacy.

