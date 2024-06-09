import React from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

import { WorkOrdersRow, WorkOrderData } from '../../styles/workOrders';
import { WorkOrderStatus } from './index';
import { getLocationNames } from '../../util/location';

const WorkOrder = ({ workOrder }) => {
    const history = useHistory();
    const { id, dueDate, number, status, title, priority, updatedAt, createdAt, location } = workOrder;

    const showWorkOrderDetails = (id) => {
        history.push({
            pathname: `/workOrders/${id}`,
        });
    }

    return (
        <WorkOrdersRow onClick={() => showWorkOrderDetails(id)} style={{ padding: '5px' }} data-testid="work-order-row">
            <WorkOrderData data-testid={`work-order-dueDate-${id}`}>{moment(dueDate).format('MM/DD/YY')}</WorkOrderData>
            <WorkOrderData data-testid={`work-order-number-${id}`}>{number}</WorkOrderData>
            <WorkOrderData data-testid={`work-order-status-${id}`}>{<WorkOrderStatus status={status} />}</WorkOrderData>
            <WorkOrderData data-testid={`work-order-title-${id}`}>{title ? title.toUpperCase() : '(NO TITLE)'}</WorkOrderData>
            <WorkOrderData data-testid={`work-order-priority-${id}`}>{priority}</WorkOrderData>
            <WorkOrderData data-testid={`work-order-updatedAt-${id}`}>{moment(updatedAt).format('MM/DD/YY')}</WorkOrderData>
            <WorkOrderData data-testid={`work-order-createdAt-${id}`}>{moment(createdAt).format('MM/DD/YY')}</WorkOrderData>
            <WorkOrderData data-testid={`work-order-location-${id}`}>{getLocationNames(location).toUpperCase()}</WorkOrderData>
        </WorkOrdersRow>
    )
}

export default WorkOrder;
