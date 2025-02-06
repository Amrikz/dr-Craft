// priority: 0

const modifyMinecraftBlocks = (event) => {
    event.modify('minecraft:end_portal_frame', block => {
        block.requiresTool = true
        block.destroySpeed = 0.1
    })
}