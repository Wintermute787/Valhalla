



export const initialState = {
    gameById: {
        1: {
            name: 'Elemental Evil',
            levels: '1-15',
            description: 'Called by the Elder Elemental Eye to serve, four corrupt prophets have risen from the depths of anonymity to claim mighty weapons with direct links to the power of the elemental princes. Each of these prophets has assembled a cadre of cultists and creatures to serve them in the construction of four elemental temples of lethal design. It is up to adventurers from heroic factions such as the Emerald Enclave and the Order of the Gauntlet to discover where the true power of each prophet lay, and dismantle it before it comes boiling up to obliterate the Realms.',
            image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/xanathar-keyart-1521232417.png?resize=480:*'
        },

        2: {
            name: 'Curse of Strahd',
            levels: '1-10',
            description: 'Under raging storm clouds, the vampire Count Strahd von Zarovich stands silhouetted against the ancient walls of Castle Ravenloft. Rumbling thunder pounds the castle spires. The wind’s howling increases as he turns his gaze down toward the village of Barovia. A lightning flash rips through the darkness, but Strahd is gone. Only the howling of the wind fills the midnight air. The master of Castle Ravenloft is having guests for dinner—and you are invited.',
            image: 'https://geekandsundry.com/wp-content/uploads/2016/04/ToDKeyArt3.jpg'
        },

        3: {
            name: 'Rage of Demons',
            levels: '1-15',
            description: 'The Underdark is a subterranean wonderland, a vast and twisted labyrinth where fear reigns. It is the home of horrific monsters that have never seen the light of day. It is here that the dark elf Gromph Baenre, Archmage of Menzoberranzan, casts a foul spell meant to ignite a magical energy that suffuses the Underdark and tears open portals to the demonic Abyss. What steps through surprises even him, and from that moment on, the insanity that pervades the Underdark escalates and threatens to shake the Forgotten Realms to its foundations. Stop the madness before it consumes you!',
            image: 'https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1552797314946-I599NBIFPCHMEYW8M4V4/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/image-asset.jpeg?format=2500w'
        }
    }
}

const gameReducer = (state = initialState, action) => {
    const {name, levels, description, id, image} = action;    
    switch(action.type) {
        case 'ADD_GAME':
            return {...state, characterById: {...state.characterById,
        [id]: {
            name: name,
            levels: levels,
            description: description,
            image: image
        }}}
        case 'DELETE_GAME':
            let newCharacterById = {...state.characterById}
            delete newCharacterById[id]
            let newState = {...state, characterById: newCharacterById}
            return newState
        
        case 'EDIT_GAME':
            return {...state, characterById: {...state.characterById,
            [id]: {
                name: name,
                levels: levels,
                description: description,
                image: image
            }}}

        default: 
            return state

    }
    
}

export default gameReducer