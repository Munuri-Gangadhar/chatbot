import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, get, remove } from "firebase/database";

import OpenAI from "openai";
import { process } from "./env";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const appSettings = {
  databaseURL: "https://agrichatbot-c6fdb-default-rtdb.firebaseio.com/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const conversationInDb = ref(database);
const chatbotConversation = document.getElementById("chatbot-conversation");

const instructionObj = {
  role: "system",
  content: "You are a helpful assistant.",
};

const myPrompts = [
  {
    user: "What are the signs of nutrient deficiency in maize crops, and how can I address them?",
    assistant: "Signs of nutrient deficiency in maize crops include yellowing of leaves, stunted growth, and poor kernel development. To address deficiencies, conduct soil tests to identify lacking nutrients and apply fertilizers accordingly. Consider using balanced fertilizers or organic amendments to replenish nutrients and promote healthy maize growth."
  },
  {
    user: "How can I control aphids in my soybean field using organic methods?",
    assistant: "Organic methods for aphid control in soybean fields include introducing natural predators like ladybugs or lacewings, spraying insecticidal soap or neem oil, and practicing intercropping with companion plants that repel aphids. Monitor aphid populations regularly and implement cultural practices such as crop rotation to reduce pest pressure."
  },
  {
    user: "What are the best practices for managing soil erosion in vineyards on sloping terrain?",
    assistant: "To manage soil erosion in vineyards on sloping terrain, implement contour plowing, construct terraces or retaining walls, and establish cover crops to stabilize soil and reduce runoff. Use erosion control blankets or mulching to protect bare soil surfaces, and avoid excessive tillage practices that can exacerbate erosion."
  },
  {
    user: "What are the key considerations for selecting tomato varieties suitable for greenhouse cultivation?",
    assistant: "When selecting tomato varieties for greenhouse cultivation, consider factors such as growth habit, disease resistance, fruit quality, and yield potential. Choose determinate or semi-determinate varieties suited to greenhouse conditions, and prioritize disease-resistant varieties to minimize pesticide reliance. Consult with local extension services or experienced growers for variety recommendations tailored to your specific greenhouse environment."
  },
 
  {
    user: "How can farmers mitigate the impact of drought on wheat production?",
    assistant: "To mitigate the impact of drought on wheat production, farmers can adopt several strategies such as selecting drought-tolerant wheat varieties, practicing conservation tillage to conserve soil moisture, and adjusting planting dates to avoid periods of water stress. Implementing efficient irrigation systems and applying soil amendments like organic matter or polymers can also help improve water retention in drought-prone areas."
  },
  {
    user: "What are some organic methods for controlling weeds in sugarcane fields?",
    assistant: "Organic methods for controlling weeds in sugarcane fields include using cover crops or mulches to suppress weed growth, practicing regular cultivation or hoeing to remove weeds manually, and applying organic herbicides derived from natural substances such as vinegar or citric acid. Additionally, promoting competitive crop stands through proper spacing and fertilization can help reduce weed pressure in sugarcane fields."
  },
  {
    user: "How can farmers enhance pollination in sunflower crops to improve seed set and yield?",
    assistant: "To enhance pollination in sunflower crops, farmers can encourage the presence of pollinators such as bees and butterflies by planting pollinator-friendly flowering plants nearby. Avoiding the use of insecticides during bloom periods preserves pollinator populations. Additionally, planting sunflower varieties with open, accessible flower heads facilitates pollinator visitation and improves seed set."
  },
  {
    user: "What are the best practices for managing nutrient deficiencies in tomato plants?",
    assistant: "Best practices for managing nutrient deficiencies in tomato plants include conducting soil tests to identify specific nutrient deficiencies, applying balanced fertilizers or organic amendments to correct deficiencies, and adjusting soil pH levels as needed for optimal nutrient availability. Foliar application of micronutrient sprays can provide rapid correction of nutrient deficiencies, especially during critical growth stages."
  },
 
  {
    user: "How can farmers prevent lodging in maize crops during periods of high winds or heavy rainfall?",
    assistant: "To prevent lodging in maize crops during adverse weather conditions, farmers can select maize varieties with sturdy stalks and good standability traits. Implementing proper plant spacing and avoiding excessive nitrogen fertilizer applications help reduce plant height and lodging risk. Additionally, timely harvesting before severe weather events and providing structural support such as trellises or braces can mitigate lodging damage."
  },
  {
    user: "What are the recommended storage conditions for preserving potato tubers after harvest?",
    assistant: "Recommended storage conditions for preserving potato tubers after harvest include maintaining cool temperatures between 4 to 10 degrees Celsius to inhibit sprouting and reduce decay. Ensure high humidity levels of 85 to 95% to prevent tuber dehydration and minimize shrinkage. Store potatoes in well-ventilated facilities with good airflow to prevent buildup of ethylene gas and reduce disease incidence."
  },
  {
    user: "How can farmers manage common pests such as aphids and caterpillars in broccoli crops?",
    assistant: "Farmers can manage common pests such as aphids and caterpillars in broccoli crops through integrated pest management (IPM) practices. This includes using natural enemies like ladybugs and parasitic wasps for biological control, applying insecticidal soaps or oils to target pest populations, and implementing physical barriers such as row covers to exclude pests. Regular scouting and monitoring help detect pest outbreaks early for timely intervention."
  },
  {
    user: "What are the key considerations for selecting bean varieties for cultivation in subtropical climates?",
    assistant: "When selecting bean varieties for cultivation in subtropical climates, farmers should consider factors such as heat tolerance, disease resistance, and adaptability to local soil and climatic conditions. Choose bush or semi-vining bean varieties suited to warmer temperatures and shorter growing seasons. Additionally, select disease-resistant varieties to minimize reliance on pesticides and ensure consistent yields."
  },
 
  {
    user: "How can farmers prevent blossom-end rot in tomato plants?",
    assistant: "To prevent blossom-end rot in tomato plants, farmers should maintain consistent soil moisture levels by watering evenly and avoiding drought stress or fluctuations. Ensure adequate calcium availability by maintaining proper soil pH levels and applying calcium-containing fertilizers as needed. Mulching around tomato plants helps conserve soil moisture and maintain more stable growing conditions, reducing the risk of blossom-end rot."
  },
  {
    user: "What are the optimal planting dates for cabbage cultivation in temperate regions?",
    assistant: "Optimal planting dates for cabbage cultivation in temperate regions depend on factors such as frost dates and growing season length. In general, cabbage can be planted as early as 4 to 6 weeks before the last expected frost date in spring for an early summer harvest. For a fall crop, plant cabbage in mid to late summer to mature before the first fall frost."
  },
  {
    user: "How can farmers manage powdery mildew in squash crops using organic methods?",
    assistant: "Farmers can manage powdery mildew in squash crops using organic methods such as applying sulfur-based fungicides or potassium bicarbonate sprays to control fungal growth. Additionally, promoting good air circulation by spacing plants adequately and avoiding overhead irrigation helps reduce humidity levels and minimize disease spread. Planting resistant squash varieties and removing infected plant debris promptly also contribute to disease management."
  },
  {
    user: "Hey!",
    assistant: "Hi there! How can I help you?"
  },
  {
    user: "Are you there?",
    assistant: "Yes, I am here to help! What can I do",
  },
]

document.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInput = document.getElementById("user-input");
  push(conversationInDb, {
    role: "user",
    content: userInput.value,
  });
  fetchReply();
  const newSpeechBubble = document.createElement("div");
  newSpeechBubble.classList.add("speech", "speech-human");
  chatbotConversation.appendChild(newSpeechBubble);
  newSpeechBubble.textContent = userInput.value;
  userInput.value = "";
  chatbotConversation.scrollTop = chatbotConversation.scrollHeight;
});

async function fetchReply() {
  try {
    const snapshot = await get(conversationInDb);
    if (snapshot.exists()) {
      const conversationArr = Object.values(snapshot.val());
      conversationArr.unshift(instructionObj);

      // Add your prompts to the conversation array
      myPrompts.forEach((prompt) => {
        conversationArr.unshift({
          role: "user",
          content: prompt.user
        });
        conversationArr.unshift({
          role: "assistant",
          content: prompt.assistant
        });
      });

      // Fetch completion from OpenAI API
      const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        
        messages: conversationArr,
        presence_penalty: 0,
        frequency_penalty: 0.3,
        max_tokens:100,
        temperature:0
      });

      // Push the AI's response to the conversation history
      push(conversationInDb, chatCompletion.choices[0].message);
      // Render the AI's response
      renderTypewriterText(chatCompletion.choices[0].message.content);
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error("Error fetching reply:", error);
  }
}

function renderTypewriterText(text) {
  const newSpeechBubble = document.createElement("div");
  newSpeechBubble.classList.add("speech", "speech-ai", "blinking-cursor");
  chatbotConversation.appendChild(newSpeechBubble);
  let i = 0;
  const interval = setInterval(() => {
    newSpeechBubble.textContent += text.slice(i - 1, i);
    if (text.length === i) {
      clearInterval(interval);
      newSpeechBubble.classList.remove("blinking-cursor");
    }
    i++;
    chatbotConversation.scrollTop = chatbotConversation.scrollHeight;
  }, 50);
}

document.getElementById("clear-btn").addEventListener("click", () => {
  remove(conversationInDb);
  chatbotConversation.innerHTML =
    '<div class="speech speech-ai">How can I help you?</div>';
});

function renderConversationFromDb() {
  get(conversationInDb).then(async (snapshot) => {
    if (snapshot.exists()) {
      Object.values(snapshot.val()).forEach((dbObj) => {
        const newSpeechBubble = document.createElement("div");
        newSpeechBubble.classList.add(
          "speech",
          `speech-${dbObj.role === "user" ? "human" : "ai"}`
        );
        chatbotConversation.appendChild(newSpeechBubble);
        newSpeechBubble.textContent = dbObj.content;
      });
      chatbotConversation.scrollTop = chatbotConversation.scrollHeight;
    }
  });
}

renderConversationFromDb();
