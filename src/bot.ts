import { Bot } from "grammy";

const font = "ᴏ̨ᴡᴇʀᴛʏᴜɪᴏᴘᴀꜱᴅꜰɢʜᴊᴋʟᴢxᴄᴠʙɴᴍ";
const defaultFont = "qwertyuiopasdfghjklzxcvbnm";
const bot = new Bot(process.env["BOT_TOKEN"]!);

// Handle text messages for tag input
bot.on("message:text", async (ctx) => {
    const text = ctx.message?.text;
    if (!text) return;

    const formattedText = convertToFancyFont(text);
    await ctx.reply(formattedText);
});

// Add this helper function after the font constants
function convertToFancyFont(text: string): string {
    return text
        .toLowerCase()
        .split("")
        .map((char) => {
            const index = defaultFont.indexOf(char);
            return index !== -1 ? font[index] : char;
        })
        .join("");
}

// Start the bot
bot.start();
