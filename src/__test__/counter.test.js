import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Counter from '../components/counter/counter.js';

describe('<Counter />', () => {
  it('exists at the start of our application', () => {
    let app = shallow(<Counter />);
    expect(app.find('span').exists()).toBeTruthy();
  });

  it('changes the state on click', ()=> {
    let app = mount(<Counter />);
    let button = app.find('.up');
    button.simulate('click');
    expect(app.state('count')).toEqual(1);
    expect(app.find('.count').text()).toContain('1');
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});
