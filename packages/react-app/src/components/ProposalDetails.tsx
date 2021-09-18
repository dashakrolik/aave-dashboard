import Card from '@material-ui/core/Card';

const ProposalDetails = (props: any) => {
  return (
    <Card>
      <p style={{ color: 'black' }}>{props.proposalItem.title || "yo"}</p>
    </Card>
  );
};

export default ProposalDetails;
