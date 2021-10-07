import React from "react";
import {mount, shallow} from "enzyme";
import Pierwszy from "./Pierwszy";

describe('Pierwszy', () => {
    it('should increment counter - easy dumb way', () => {
        const wrapper = mount(<Pierwszy />);

        wrapper.find('button').invoke('onClick')();
        expect(wrapper.find('span').text()).toEqual('1');
        wrapper.find('button').invoke('onClick')();
        expect(wrapper.find('span').text()).toEqual('2');
    })
})