import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Todo from '../components/Todo';

function setup(propOverrides) {
  const props = Object.assign({
    todo: {
      id: 1,
      text: 'テストTODO',
      isChecked: false,
    }
  }, propOverrides);

  const renderer = TestUtils.createRenderer();
  renderer.render(<Todo {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
  };
}

describe('Todo', () => {
  it('TODOコンポーネントの描画', () => {
    const { output } = setup();
    expect(output.type).toEqual('li');
  });

  it('テキストの表示', () => {
    const prop = {
      todo: {
        id: 2,
        text: 'Reactの学習',
        isChecked: false,
      }
    }
    const { output } = setup(prop);
    const itemText = output.props.children;
    expect(itemText).toEqual('Reactの学習');
  });
});