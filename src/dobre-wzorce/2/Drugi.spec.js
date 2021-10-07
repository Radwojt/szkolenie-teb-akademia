import React from "react";
import {mount} from "enzyme";
import Drugi from "./Drugi";

describe('Drugi', () => {
    it.each([
        [null, null, null, 'Brakuje wartości'],
        [3, 2, 2, "A jest większe od B i B jest równe C"],
        [3, 2, 1, 'A jest większe od B i B jest większe od C'],
        [3, 2, 4, "C jest większe od A i A jest większe od B"],
        [1, 1, 1, 'Wszystko jest równe']
    ])('should return proper text for given values', (a, b, c, expected) => {
        const wrapper = mount(<Drugi a={a} b={b} c={c} />)
        expect(wrapper.text()).toEqual(expected);
    })
})