const initialState = {
    characterById: {
        1: {
            name: "mike",
            job: "warrior",
            race: "dwarf",
            level: 5,
            items: [
                "rope",
                "backpack",
                "axe",
                "adventure Food",
                "brass armor"
            ],
            image: "https://vignette.wikia.nocookie.net/fynncampaigns/images/4/46/Dwarf.jpg/revision/latest?cb=20161213214322"
        },
        2: {
            name: "Todd",
            job: "Wizard",
            race: "Lizard-folk",
            level: 6,
            items: [
                "robes",
                "potions",
                "staff",
                "mages food"
            ],
            image: "https://wp-media.patheos.com/blogs/sites/616/2016/01/Wizard.jpg"
        },
        3: {
            name: "Brian",
            job: "Druid",
            race: "Giant Slug",
            level: 100,
            items: [
                "mushrooms",
                "Druid Stick",
                "funny hat",
                
            ],
            image: "https://vignette.wikia.nocookie.net/p__/images/2/2e/Slurm.png/revision/latest?cb=20150807133341&path-prefix=protagonist"
        }
    }
}

const characterReducer = (state = initialState, action) => {
    const {name, job, race, level, id, items, image} = action;
    switch(action.type) {
        case 'ADD_CHARACTER':
            return {...state, characterById: {...state.characterById,
        [id]: {
            name: name,
            job: job,
            race: race,
            level: level,
            items: items,
            image: image
        }}}
        case 'DELETE_CHARACTER':
            let newCharacterById = {...state.characterById}
            delete newCharacterById[id]
            let newState = {...state, characterById: newCharacterById}
            return newState
        
        case 'EDIT_CHARACTER':
            return {...state, characterById: {...state.characterById,
            [id]: {
                name: name,
                job: job,
                race: race,
                level: level,
                items: items,
                image: image
            }}}

        default: 
            return state

    }
    
}

export default characterReducer;