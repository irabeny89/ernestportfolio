import siteLocalData from "../data/siteLocalData";

const Intro = () => {
  const { tools, intro } = siteLocalData;

  return (
    <div data-testid="intro">
      <p className="display-4 text-center mb-5">{intro}</p>
      <div
        className="d-flex gap-1 justify-content-around flex-wrap"
        data-testid="tools"
      >
        {tools.map(({ name, Icon, color }) => (
          <div key={name} className="d-flex align-items-center">
            <Icon color={color} /> {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Intro;
