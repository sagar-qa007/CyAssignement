import React, { useState, useEffect } from 'react';
import { 
    Box,
    Card, 
    CardContent, 
} from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { WorkOrdersTable, WorkOrdersHeaderRow, WorkOrdersTableHeader } from '../../styles/workOrders';
import jsonData from '../../stubs/workOrders.json';
import WorkOrder from './WorkOrder';
import headers from '../../constants/headers';

const useStyles = makeStyles(() => createStyles({
    root: {
      padding: '20px',
    }
}));

const WorkOrders = () => {
    const classes = useStyles();

    const [dataFetched, setDataFetched] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setDataFetched(true);
        setData(jsonData.data.workOrders);
    }, []);

    if (!dataFetched) {
        return (
            <div className={classes.root} data-testid="loading">
                <Card data-testid="loading-card">
                    <CardContent data-testid="loading-content">
                        Loading...
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className={classes.root}  data-testid="work-orders">
            <Box fontSize={20} fontWeight='fontWeightBold' data-testid="work-orders-title">Work Orders</Box>
            <WorkOrdersTable  data-testid="work-orders-table">
                <thead data-testid="work-orders-table-head">
                    <WorkOrdersHeaderRow data-testid="work-orders-header-row">
                        {headers.map((header, i) => (
                            <WorkOrdersTableHeader key={i} data-testid={`work-order-header-${i}`}>{header}</WorkOrdersTableHeader>
                        ))}
                    </WorkOrdersHeaderRow>
                </thead>
                <tbody data-testid="work-orders-table-body">
                    {data.map((workOrder) => (
                        <WorkOrder key={workOrder.id} workOrder={workOrder} data-testid={`work-order-list}`}/>
                    ))}
                </tbody>
            </WorkOrdersTable>
        </div>
    )
}

export default WorkOrders;