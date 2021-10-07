import * as React from "react";
import {mount} from "enzyme";
import Trzeci from "./Trzeci";
import {act} from "react-dom/test-utils";


describe('Trzeci', () => {

    afterEach(() => {
        global.fetch.mockReset();
    })

    it('should render name', async () => {
        global.fetch = jest.fn();

        global.fetch.mockImplementationOnce(() => Promise.resolve({
            status: 200,
            json: () => Promise.resolve({text: 'Radek'})
        }))

        const wrapper = await mount(<Trzeci />);

        await act(async () => {
            await new Promise(resolve => window.setImmediate(resolve))
        });
        await wrapper.update();

        expect(wrapper.find('span').text()).toEqual("Radek")
    })

    it('should throw on error', async () => {
        global.fetch = jest.fn();

        global.fetch.mockImplementationOnce(() => Promise.reject())

        const wrapper = await mount(<Trzeci />);

        await act(async () => {
            await new Promise(reject => window.setImmediate(reject))
        });

        await wrapper.update();

        expect(wrapper.find('span').text()).toEqual("Bad request")

    })
})