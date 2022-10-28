import defaultForm from './default';

export default (configContext) => ({
  default: defaultForm(configContext),
  inventory: {
    disabled: true,
  },
  photo: {
    disabled: true,
  },
  public: {
    disabled: true,
  },
  timebased: {
    disabled: true,
  },
});
