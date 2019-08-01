

export const initialState = {
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
            image: "https://i.pinimg.com/originals/87/30/8c/87308c04be403dbc2f6da40562961fc1.jpg"
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
        },
        4: {
            name: "Joe",
            job: "Paladin",
            race: "Badass",
            level: 300,
            items: [
                "bad-ass Mace",
                "bad-ass armor",
                "Bad-ass food ",
                
            ],
            image: "http://static1.squarespace.com/static/5840d403bebafba4c28d6c4f/5840dc4a46c3c4e5e4b2af36/5842119f893fc0f82bcf506a/1480725201499/paladin-wallpaper%5B1%5D.jpg?format=1500w"
        },
        5: {
            name: "Jim",
            job: "Thief",
            race: "Goblin",
            level: 40,
            items: [
                "Knives",
                "Thieves tools",
                "rope",
                
            ],
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/feac120a-4482-4a91-9cee-fce7fbde0dbe/dbrlxyf-bb5748e3-24d3-4e6a-8a68-1d59e913add6.png/v1/fill/w_894,h_894,strp/goblin_rogue_by_astri_lohne_dbrlxyf-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2ZlYWMxMjBhLTQ0ODItNGE5MS05Y2VlLWZjZTdmYmRlMGRiZVwvZGJybHh5Zi1iYjU3NDhlMy0yNGQzLTRlNmEtOGE2OC0xZDU5ZTkxM2FkZDYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.V1WmXA7vEAsL1mvDkNx5SKO5Zsg3UvlQzX-OTbCZOsg"
        },
        6: {
            name: "Dave",
            job: "Enchanter",
            race: "Elf",
            level: 3,
            items: [
                "Staff",
                "Mages pouch",
                "Apples",
                
            ],
            image: "https://cf.geekdo-images.com/medium/img/fngDmmfjrH4f2DK7TihYHx6EHIw=/fit-in/500x500/filters:no_upscale()/pic4302522.jpg"
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
            id: id,
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
                id: id,
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