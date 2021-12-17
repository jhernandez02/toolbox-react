export function addText(text) {
    return { 
        type: 'ADD_TEXT', 
        value: text 
    }
}
  
export function delText(id) {
    return { 
        type: 'DEL_TEXT', 
        value: id 
    }
}

export function delAll() {
    return { 
        type: 'DEL_ALL', 
    }
}