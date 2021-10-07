import React from "react";
import {mount} from 'enzyme';
import Czwarty from "./Czwarty";

describe('Czwarty', () => {
    const mountWrapper = (path) => mount(<Czwarty path={path}/>);

    Object.defineProperty(window, 'location', {
        value: {
            assign: jest.fn()
        }
    })

    afterEach(() => {
        jest.resetAllMocks();
    })

    it('should redirect to google', () => {
        const path = 'https://google.com';
        const wrapper = mountWrapper(path);

        wrapper.find('button').invoke('onClick')();
        expect(window.location.assign).toHaveBeenCalledWith('https://google.com')
    })

    it('should redirect to facebook', () => {
        const path = 'https://facebook.com';
        const wrapper = mountWrapper(path);

        wrapper.find('button').invoke('onClick')();
        expect(window.location.assign).toHaveBeenCalledWith('https://facebook.com')
    })
})