import styled from 'styled-components';

export const WorkOrdersWrapper = styled.div`
    padding: 20px;
`;

export const WorkOrdersHeader = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

export const WorkOrdersTable = styled.table`
    width: 100%;
`;

export const WorkOrdersTableHeader = styled.th`
    background-color: white;
    position: sticky;
    top: 0;
`;

export const WorkOrdersHeaderRow = styled.tr`
    height: 30px;
`;

export const WorkOrdersRow = styled(WorkOrdersHeaderRow)`
    cursor: pointer;
    transition: 0.5s;
	:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
	}
`;

export const WorkOrderData = styled.td`
    text-align: center;
    font-size: 14px;
`;  


export const WorkOrderDetailsWrapper = styled(WorkOrdersWrapper)`
    padding: 20px;
`;