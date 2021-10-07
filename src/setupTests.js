import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

process.on('unhandledRejection', (reason, promise) => {
    console.log("unhandledRejection", reason, promise)
})