import React from 'react';
import { shallow, mount } from 'enzyme';

import { AddTodoAlias as AddTodo } from './AddTodo';

describe('AddTodo', () => {
  it('should render div as root', () => {
    const component = shallow(<AddTodo onAddTodo={jest.fn()} />);

    expect(component.is('div')).toBeTruthy();
  });
  
  it('should render input as first child', () => {
    const component = shallow(<AddTodo onAddTodo={jest.fn()} />);
    const input = component.childAt(0);

    expect(input.is('input')).toBeTruthy();
    expect(input.prop('className')).toBe('AddTodo-input');
    expect(input.prop('value')).toBe('');
  });
  
  it('should render button as second child', () => {
    const component = shallow(<AddTodo onAddTodo={jest.fn()} />);
    const button = component.childAt(1);

    expect(button.is('button')).toBeTruthy();
    expect(button.children().text()).toBe('Add');
  });
  
  it('should onChange input should change its value', () => {
    const component = shallow(<AddTodo onAddTodo={jest.fn()} />);
    let input = component.childAt(0);
    input.prop('onChange')({ target: { value: 'test' } });
    
    input = component.childAt(0);
    expect(input.prop('value')).toBe('test');
  });
  
  it('should onClick button should call onAddTodo with right arguments', () => {
    const onAddTodo = jest.fn();
    const component = mount(<AddTodo onAddTodo={onAddTodo} />);
    
    let input = component.children().childAt(0);
    input.prop('onChange')({ target: { value: 'test' } });

    const button = component.children().childAt(1);
    button.simulate('click');
    expect(onAddTodo).toHaveBeenCalledWith('test');
  });
});