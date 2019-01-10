import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { withStyles } from '@material-ui/core/styles';

ExpansionPanel.Details = withStyles({
  root: {
    padding: '5px 25px 25px 25px',
  },
})(ExpansionPanelDetails);
ExpansionPanel.Summary = ExpansionPanelSummary;

export default withStyles({
  root: {
    borderWidth: '0 !important',
  },
  expanded: {
    borderWidth: '2px !important',
  },
})(ExpansionPanel);
