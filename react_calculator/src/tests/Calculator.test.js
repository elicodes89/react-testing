import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it ('should add 4 + 1' , () => {
    const button1 = container.find('#number1');
    button1.simulate('click');

    const operator_add = container.find('#operator_add');
    operator_add.simulate('click');

    const button4 = container.find('#number4');
    button4.simulate('click');

    const operatorEquals = container.find('#operator-equals');
    operatorEquals.simulate('click');

    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('5');
  })

  it ('should substract 4 - 7' , () => {
    const button7 = container.find('#number7');
    button7.simulate('click');

    const operatorSubtract = container.find('#operator-subtract');
    operatorSubtract.simulate('click');

    const button4 = container.find('#number4');
    button4.simulate('click');

    const operatorEquals = container.find('#operator-equals');
    operatorEquals.simulate('click');

    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');



  })

  it ('should multiply 3 by 5' , () => {
    const button3 = container.find('#number3');
    button3.simulate('click');

    const operatorMultiply = container.find('#operator-multiply');
    operatorMultiply.simulate('click');

    const button5 = container.find('#number5');
    button5.simulate('click');

    const operatorEquals = container.find('#operator-equals');
    operatorEquals.simulate('click');

    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('15');
  })

  it ('should divide 21 by 7' , () => {
    const button2 = container.find('#number2');
    button2.simulate('click');

    const button1 = container.find('#number1');
    button1.simulate('click');

    const operatorDivide = container.find('#operator-divide');
    operatorDivide.simulate('click');

    const button7 = container.find('#number7');
    button7.simulate('click');

    const operatorEquals = container.find('#operator-equals');
    operatorEquals.simulate('click');

    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })

  it ('should concatenate multiple numbers' , () => {
    const button2 = container.find('#number2');
    button2.simulate('click');

    const button1 = container.find('#number1');
    button1.simulate('click');

    const button7 = container.find('#number7');
    button7.simulate('click');

    const runningTotal = container.find('#running-total');
    runningTotal.simulate('click');

    expect(runningTotal.text()).toEqual('217');

  })

  it ('should chain multiple operations together' , () => {
    const button2 = container.find('#number2');
    button2.simulate('click');

    const button1 = container.find('#number1');
    button1.simulate('click');

    const operatorDivide = container.find('#operator-divide');
    operatorDivide.simulate('click');

    const button6 = container.find('#number6');
    button6.simulate('click');

    const operatorMultiply = container.find('#operator-multiply');
    operatorMultiply.simulate('click');

    const button7 = container.find('#number7');
    button7.simulate('click');

    const operatorEquals = container.find('#operator-equals');
    operatorEquals.simulate('click');

    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('24.5');

  })

  it('should clear the total without affecting the calculation' , () => {
    const button2 = container.find('#number2');
    button2.simulate('click');

    const button1 = container.find('#number1');
    button1.simulate('click');

    const operatorAdd = container.find('#operator_add');
    operatorAdd.simulate('click');

    const button6 = container.find('#number6');
    button6.simulate('click');

    const clear = container.find('#clear');
    clear.simulate('click');

    const button3 = container.find('#number3');
    button3.simulate('click');
  })
})

