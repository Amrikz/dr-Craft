// priority: 0

const registerArsNouveauRecipes = (event) => {
    //Саженцы из Ars Nouveau
    event.shaped('ars_nouveau:red_archwood_sapling', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:dyes/red',
        B: 'gtceu:fertilizer',
        C: '#minecraft:saplings',
    }).id('ars_nouveau:red_archwood_sapling')

    event.shaped('ars_nouveau:green_archwood_sapling', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:dyes/green',
        B: 'gtceu:fertilizer',
        C: '#minecraft:saplings',
    }).id('ars_nouveau:green_archwood_sapling')

    event.shaped('ars_nouveau:blue_archwood_sapling', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:dyes/blue',
        B: 'gtceu:fertilizer',
        C: '#minecraft:saplings',
    }).id('ars_nouveau:blue_archwood_sapling')

    event.shaped('ars_nouveau:purple_archwood_sapling', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:dyes/purple',
        B: 'gtceu:fertilizer',
        C: '#minecraft:saplings',
    }).id('ars_nouveau:purple_archwood_sapling')

    //Книга новичка
    event.remove({ id: 'ars_nouveau:novice_spell_book' })

    event.shaped('ars_nouveau:novice_spell_book', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: '#forge:gems/source',
        B: '#forge:dyes/purple',
        C: '#forge:foils/gold',
        D: 'minecraft:book',
    }).id('ars_nouveau:novice_spell_book')

    //Яйца призыва
    event.shaped('ars_nouveau:drygmy_se', [
        ' A ',
        'BCB',
        ' D '
    ], {
        A: '#forge:gems/source',
        B: '#forge:bones',
        C: '#forge:eggs',
        D: '#forge:dusts/glowstone',
    }).id('ars_nouveau:drygmy_se')

    event.shaped('ars_nouveau:whirlisprig_se', [
        ' A ',
        'BCB',
        ' D '
    ], {
        A: '#forge:gems/source',
        B: '#minecraft:leaves',
        C: '#forge:eggs',
        D: '#forge:dusts/glowstone',
    }).id('ars_nouveau:whirlisprig_se')

    event.shaped('ars_nouveau:starbuncle_se', [
        ' A ',
        'BCB',
        ' D '
    ], {
        A: '#forge:gems/source',
        B: 'tfc:groundcover/pinecone',
        C: '#forge:eggs',
        D: '#forge:dusts/glowstone',
    }).id('ars_nouveau:starbuncle_se')

    //Яйца призыва 2
    event.shaped('ars_nouveau:wilden_hunter_se', [
        ' A ',
        'BCD',
        ' E '
    ], {
        A: '#forge:gems/source',
        B: 'tfc:large_raw_hide',
        C: '#forge:eggs',
        D: '#forge:bones',
        E: '#forge:dusts/glowstone',
    }).id('ars_nouveau:wilden_hunter_se')

    event.shaped('ars_nouveau:wilden_guardian_se', [
        ' A ',
        'BCD',
        ' E '
    ], {
        A: '#forge:gems/source',
        B: 'tfc:large_raw_hide',
        C: '#forge:eggs',
        D: '#minecraft:fishes',
        E: '#forge:dusts/glowstone',
    }).id('ars_nouveau:wilden_guardian_se')

    event.shaped('ars_nouveau:wilden_stalker_se', [
        ' A ',
        'BCD',
        ' E '
    ], {
        A: '#forge:gems/source',
        B: 'tfc:large_raw_hide',
        C: '#forge:eggs',
        D: '#forge:feathers',
        E: '#forge:dusts/glowstone',
    }).id('ars_nouveau:wilden_stalker_se')

    event.shaped('ars_nouveau:magebloom_crop', [
        ' A ',
        'BCB',
        ' A '
    ], {
        A: '#forge:dusts/glowstone',
        B: '#forge:gems/source',
        C: '#tfc:seeds',
    }).id('ars_nouveau:magebloom_crop')


    event.shaped('ars_nouveau:mendosteen_pod', [
        ' A ',
        'BCD',
        ' A '
    ], {
        A: '#forge:gems/source',
        B: '#tfc:foods/apples',
        C: 'gtceu:fertilizer',
        D: 'ars_nouveau:green_archwood_sapling'
    }).id('ars_nouveau:mendosteen_pod')

    event.shaped('ars_nouveau:bastion_pod', [
        ' A ',
        'BCD',
        ' A '
    ], {
        A: '#forge:gems/source',
        B: '#tfc:foods/apples',
        C: 'gtceu:fertilizer',
        D: 'ars_nouveau:purple_archwood_sapling'
    }).id('ars_nouveau:bastion_pod')

    event.shaped('ars_nouveau:bombegranate_pod', [
        ' A ',
        'BCD',
        ' A '
    ], {
        A: '#forge:gems/source',
        B: '#tfc:foods/apples',
        C: 'gtceu:fertilizer',
        D: 'ars_nouveau:red_archwood_sapling'
    }).id('ars_nouveau:bombegranate_pod')

    event.shaped('ars_nouveau:frostaya_pod', [
        ' A ',
        'BCD',
        ' A '
    ], {
        A: '#forge:gems/source',
        B: '#tfc:foods/apples',
        C: 'gtceu:fertilizer',
        D: 'ars_nouveau:blue_archwood_sapling'
    }).id('ars_nouveau:frostaya_pod')

    event.shapeless('ars_nouveau:sourceberry_bush', [
        'ars_nouveau:magebloom_crop',
        'tfc:food/blackberry',
    ]).id('ars_nouveau:sourceberry_bush')
}