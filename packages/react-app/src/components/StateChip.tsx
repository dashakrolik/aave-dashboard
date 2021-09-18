interface IStateChipProps {
  state: string
};

const StateChip = (props: IStateChipProps) => {
  const { state } = props;

  const setChipColor = () => {
    switch (state) {
      case 'Executed':
        return 'rgb(119, 160, 108)';
      case 'Active':
        return '';
      case 'Canceled':
        return 'rgb(247, 110, 110)';
      case 'Queued':
        return 'rgb(216, 207, 107)'
      default:
        return '';
    }
  }

  const chipColor = setChipColor();

  return (
    <div className="chip-wrapper">
      <div className="chip" style={{
        backgroundColor: chipColor,
        background: state === 'Active' ? 'linear-gradient(-45deg, #9d56ee, #3318e1)' : chipColor
      }}>
      </div>
      <p className="chip-label">{state}</p>
    </div>
  );
};

export default StateChip;
