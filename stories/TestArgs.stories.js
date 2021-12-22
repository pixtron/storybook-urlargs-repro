export default {
  title: 'Test Args'
};

const Template = (args) => {
  return JSON.stringify(args);
}

export const Bob = Template.bind({});
Bob.args = {
  first: 'Bob',
  last: 'Miller',
  foo: 'bar',
};
Bob.argTypes = {
  first: {
    control: {type: 'select'},
    name: "first",

    // type: {name: 'string'},
    options: ['Bob', 'Max']
  },
  last: {
    control: {type: 'select'},
    name: "last",

    // type: {name: 'string'},
    options: ['Miller', 'Meyer']
  },
  foo: {
    control: {type: 'text'},
    name: "foo"
  }
}
