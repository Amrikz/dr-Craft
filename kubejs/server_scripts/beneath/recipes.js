// priority: 0

const registerBeneathRecipes = (event) => {
    event.recipes.gtceu.macerator('slime_from_ore')
        .itemInputs('beneath:raw_slime')
        .itemOutputs('minecraft:slime_ball')
        .duration(300)
        .EUt(4)

    event.recipes.createMilling('minecraft:slime_ball', '1x beneath:raw_slime')
        .id('tfg:milling/slime_ball')
}