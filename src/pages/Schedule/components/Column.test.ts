import { Column, Task } from "./index"
import renderer from 'react-test-renderer'


it('changes the class when hovered', () => {
    const component = renderer.create(
        Column({ id: 1, index: 1, title: 'QWEQWE', list: [{ body: "Make qweqwr", id: 0, title: "TEST" }] })
    );
    let tree = component.toTree();
    expect(tree).toMatchSnapshot();
    renderer.act(() => {
        tree?.props.onMouseLeave();
    });

    tree = component.toTree();
    expect(tree).toMatchSnapshot();
});
