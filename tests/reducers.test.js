import { addText, delText, delAll } from "../src/redux/actions";
import textList from "../src/redux/reducers/textList";

const defaultState = textList();

test('DEFAULT textList reducer', () => {
    expect(defaultState).toEqual([]);
    const message = "demo";
});

test('ADD_TEXT textList reducer', () => {
    const message = "demo";
    const state = textList(defaultState, addText(message));
    expect(state).toEqual([message]);
});

test('DEL_TEXT textList reducer', () => {
    const id = 1;
    const data = ['demo1','demo2','demo3'];
    const state = textList(data, delText(id));
    expect(state).toEqual(['demo1','demo3']);
});

test('DEL_ALL textList reducer', () => {
    const data = ['demo1','demo2','demo3'];
    const state = textList(data, delAll());
    expect(state).toEqual([]);
});