import React from 'react';
import Chip from '@material-ui/core/Chip';
import statuses from '../../constants/workOrderStatuses';

const WorkOrderStatus = ({ status }) => {
    const { label, color } = statuses[status || 'OPEN'];
    return <Chip data-testid="status-chip" label={label} style={{ backgroundColor: color }} />
}

export default WorkOrderStatus;