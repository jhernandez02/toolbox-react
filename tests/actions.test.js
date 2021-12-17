import { addText, delText, delAll } from "../src/redux/actions";

test('ADD_TEXT action creator', () => {
    expect(addText('demo')).toEqual({ 
        type: 'ADD_TEXT', 
        value: 'demo' 
    });
});

test('DEL_TEXT action creator', () => {
    expect(delText(5)).toEqual({ 
        type: 'DEL_TEXT', 
        value: 5
    });
});

test('DEL_ALL action creator', () => {
    expect(delAll()).toEqual({ 
        type: 'DEL_ALL', 
    });
});