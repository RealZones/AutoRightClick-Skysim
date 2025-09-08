ChatLib.chat("§a[AutoRightClick] Module loaded! (v4, Mouse/Click Fix)"); 
const Minecraft = Java.type("net.minecraft.client.Minecraft");
const mc = Minecraft.func_71410_x(); 


const releaseMouseGui = new Gui();

let isRightClicking = false;
let lastClickTime = 0;
let lockedSlot = -1; 
let previousSlot = -1; 

function findDrillSlot() {
    const player = mc.field_71439_g; 
    if (!player) return -1;


    for (let i = 0; i < 9; i++) {
        const stack = player.field_71071_by.func_70301_a(i); 
        if (!stack) continue;


        const itemName = ChatLib.removeFormatting(stack.func_82833_r()); 
        if (!itemName) continue;

        if (itemName.includes("Rocky Ultra-Fusion Drill ZQ-9000")) {
            ChatLib.chat(`§a[AutoRightClick] Found drill in slot ${i + 1}`);
            return i;
        }
    }
    return -1;
}


register("packetSent", (packet, event) => {
    if (!isRightClicking) return;
    if (packet.class.getSimpleName() === "C09PacketHeldItemChange") {
        cancel(event);
    }
});

register("command", () => {
    try {
        isRightClicking = !isRightClicking;

        if (isRightClicking) {
            lockedSlot = findDrillSlot();
            if (lockedSlot === -1) {
                ChatLib.chat("§c[AutoRightClick] Couldn't find Rocky Ultra-Fusion Drill ZQ-9000 in hotbar!");
                isRightClicking = false; 
                return;
            }

            previousSlot = mc.field_71439_g.field_71071_by.field_70461_c;
            mc.field_71439_g.field_71071_by.field_70461_c = lockedSlot;

            releaseMouseGui.open();

            ChatLib.chat(`§9[AutoRightClick] §aEnabled! Holding right click on slot ${lockedSlot + 1}. Mouse released.`);
        } else {
            
            releaseMouseGui.close();

            if (previousSlot >= 0 && previousSlot <= 8) {
                mc.field_71439_g.field_71071_by.field_70461_c = previousSlot;
            }
            
            ChatLib.chat("§9[AutoRightClick] §cDisabled! Mouse re-grabbed. Resume normal play.");
        }
    } catch (e) {
        ChatLib.chat("§c[AutoRightClick] Error in toggle command:");
        ChatLib.chat(e.toString());
        console.log(e);
    }
}).setName("autorightclick");


register("tick", () => {

    if (isRightClicking) {

        if (mc.field_71439_g && mc.field_71439_g.field_71071_by.field_70461_c === lockedSlot) {
            const now = Date.now();
            if (now - lastClickTime >= 250) { 
                Client.sendPacket(new net.minecraft.network.play.client.C08PacketPlayerBlockPlacement(
                    mc.field_71439_g.func_71045_bC()
                ));
                lastClickTime = now;
            }
        }
    }
});


register("guiClosed", (gui) => {
    if (gui === releaseMouseGui && isRightClicking) {
        isRightClicking = false;
        if (previousSlot >= 0 && previousSlot <= 8) {
            mc.field_71439_g.field_71071_by.field_70461_c = previousSlot; 
        }
        ChatLib.chat("§9[AutoRightClick] §cDisabled automatically! GUI closed. Mouse re-grabbed.");
    }
});

const mouseUngrabGui = new Gui();
let isMouseUngrabbed = false;

function toggleMouseUngrab() {
    isMouseUngrabbed = !isMouseUngrabbed;

    if (isMouseUngrabbed) {
        mouseUngrabGui.open();
        ChatLib.chat("§cAutoRightClick » §7Mouse ungrab has been §aenabled§7. Disable it by pressing §aU §7again. §8(§75§8)");
    } else {
        mouseUngrabGui.close();
        ChatLib.chat("§cAutoRightClick » §7Mouse ungrab has been §cdisabled§7. §8(§75§8)");
    }
}

register("key", toggleMouseUngrab).setKey("U");