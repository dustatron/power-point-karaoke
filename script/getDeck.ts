import OpenAI from "openai";
import fs from "fs";
import axios from "axios";
// import { OPENAI_API_KEY } from "../secrets.js";

// Initialize OpenAI
const openai = new OpenAI({
  // apiKey: OPENAI_API_KEY,
});

const topic = "A business plan for a Pizza Help desk ";
const name = "PizzaHelpDesk";
const slideNumber = 10;

async function askChatGPT(prompt: string) {
  const params: OpenAI.Chat.ChatCompletionCreateParams = {
    messages: [{ role: "user", content: workingPrompt }],
    model: "gpt-3.5-turbo",
  };
  const chatCompletion: OpenAI.Chat.ChatCompletion =
    await openai.chat.completions.create(params);
  const data = chatCompletion.choices[0].message.content;
  if (data) {
    const result = await JSON.parse(data);
    return result;
  }
  return "no data";
}

const workingPrompt = `
I am working on a funny and absurd power point presentation. 
I would like you to help me build some simple slides for a powerpoint karaoke game. For the topic of ${topic} you should provide ${slideNumber} slides for a silly presentation. 
Each slide you should provide a simple one to two work title, a simple sub title, and one or two nonsensical sentence for the slide copy. Also include a prompt for the dall-e image generation that works for the slide. 

Slides should include, graphs, charts, diagrams, point charts, bell curves, flow charts, diagrams of complicated logic, arrows, info bubbles, call outs, insider jargon, acronyms, and fake words.
The first slide should just have the presentation title and sub title. Do not produce an image for that slide. 

you should provide the slides result in a json array of objects.
include an img placeholder field
the following format is a good example:
[
  { "slideNumber": 0,  "title": “provide title for presentation”, "subTitle": “sub title for presentation”},
  {
  "slideNumber": "slide number",
  "title": "slide title",
  "subTitle": "sub title",
  "copy": "slide sentence",
  "imgPrompt": "dall-e image prompt",
  "img": “/imgs/{topic}-{slideNumber}.png”
  },
  ]
`;

const myPrompt: string = workingPrompt;

// Function to save JSON object to a file
function saveJSONToFile(jsonObject: {}, name: string) {
  const saveMe = { [name]: jsonObject };
  // Convert JSON object to string
  const jsonString = JSON.stringify(saveMe, null, 2);

  const filename = `./script/output/${name}.ts`;

  // Write JSON string to a file
  fs.writeFile(filename, jsonString, "utf8", function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }

    console.log("JSON file has been saved.");
  });
}

async function generateImage(prompt: string, fileName: string) {
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt,
    n: 1,
    size: "1024x1024",
  });
  console.log("url", response.data[0].url);
  const imageURL = response.data[0].url || "";
  await downloadImage(imageURL, fileName);

  return null;
}

async function downloadImage(imageURL: string, imageName: string) {
  try {
    const response = await axios.get(imageURL, {
      responseType: "arraybuffer",
      // headers: { Authorization: `Bearer ${OPENAI_API_KEY}` },
    });

    fs.writeFile(
      `./script/output/${imageName}.png`,
      response.data,
      "binary",
      (err) => {
        if (err) {
          console.error("Error saving image:", err);
        } else {
          console.log(`Image saved as output-${imageName}.png`);
        }
      }
    );
  } catch (error) {
    console.error("Error downloading image:", error);
  }
  return null;
}

type Slide = {
  slideNumber: string;
  title: string;
  subTitle: string;
  copy: string;
  imgPrompt: string;
  img: string;
  imgName: string;
  imgDir: string;
};

async function getDeck() {
  const response = await askChatGPT(myPrompt);
  console.log("Response from ChatGPT:", response);
  for (let index = 1; index < response.length; index++) {
    if (response[index] && response[index].imgPrompt) {
      const imgName = `${name}-${index}`;
      const imageDir = `/imgs/${imgName}.png`;
      response[index].img = imageDir;
      response[index].imgName = imgName;
    }
  }

  await saveJSONToFile(response, name);
  console.log("Deck is completed");
  for (let j = 1; j < response.length; j++) {
    if (j === 1) {
      generateImage(response[j].imgPrompt, response[j].imgName);
    } else {
      const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("image " + j + " downloaded");
        }, 60000);
      });
      const imageResult = await myPromise;
      generateImage(response[j].imgPrompt, response[j].imgName);
      console.log(imageResult);
    }
  }
}

getDeck();
