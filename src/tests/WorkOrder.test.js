import React from 'react';
import { render, screen } from '@testing-library/react';
import { WorkOrder } from '../components/WorkOrders';

describe('WorkOrder', () => {
    const mockWorkOrder = {
        id: 'test id',
        dueDate: new Date(2021, 0, 1),
        number: '0989',
        status: 'OPEN',
        title: 'test title',
        priority: 'test priority',
        updatedAt: new Date(2021, 0, 2),
        createdAt: new Date(2021, 0, 3),
        location: [
            {
                "name": "Test Location 1",
            }
        ]
    }

    const mockWorkOrderNoTitleLocation = {
        id: 'test id',
        dueDate: new Date(2021, 0, 1),
        number: '0989',
        status: 'OPEN',
        priority: 'test priority',
        updatedAt: new Date(2021, 0, 2),
        createdAt: new Date(2021, 0, 3),
    }

    const mockWorkOrderMultipleLocations = {
        id: 'test id',
        dueDate: new Date(2021, 0, 1),
        number: '0989',
        status: 'OPEN',
        title: 'test title',
        priority: 'test priority',
        updatedAt: new Date(2021, 0, 2),
        createdAt: new Date(2021, 0, 3),
        location: [
            {
                "name": "Test Location 1",
            },
            {
                "name": "Test Location 2",
            }
        ]
    }

    const Wrapper = ({ children }) => (
        <table><tbody>{children}</tbody></table>
    );

    it('should render due date', () => {
        render(<Wrapper><WorkOrder workOrder={mockWorkOrder} /></Wrapper>);
        expect(screen.getByText('01/01/21')).toBeInTheDocument;
    });

    it('should render work order number', () => {
        render(<Wrapper><WorkOrder workOrder={mockWorkOrder} /></Wrapper>);
        expect(screen.getByText('0989')).toBeInTheDocument;
    });

    it('should render status', () => {
        render(<Wrapper><WorkOrder workOrder={mockWorkOrder} /></Wrapper>);
        expect(screen.getByText('Open')).toBeInTheDocument;
    });

    it('should render title', () => {
        render(<Wrapper><WorkOrder workOrder={mockWorkOrder} /></Wrapper>);
        expect(screen.getByText('TEST TITLE')).toBeInTheDocument;
    });

    it('should render priority', () => {
        render(<Wrapper><WorkOrder workOrder={mockWorkOrder} /></Wrapper>);
        expect(screen.getByText('test priority')).toBeInTheDocument;
    });

    it('should render updatedAt', () => {
        render(<Wrapper><WorkOrder workOrder={mockWorkOrder} /></Wrapper>);
        expect(screen.getByText('01/02/21')).toBeInTheDocument;
    });

    it('should render priority', () => {
        render(<Wrapper><WorkOrder workOrder={mockWorkOrder} /></Wrapper>);
        expect(screen.getByText('01/03/21')).toBeInTheDocument;
    });

    it('should render location', () => {
        render(<Wrapper><WorkOrder workOrder={mockWorkOrder} /></Wrapper>);
        expect(screen.getByText('TEST LOCATION 1')).toBeInTheDocument;
    });

    it('should render with missing title', () => {
        render(<Wrapper><WorkOrder workOrder={mockWorkOrderNoTitleLocation} /></Wrapper>);
        expect(screen.getByText('(NO TITLE)')).toBeInTheDocument;
    });

    it('should render with missing location', () => {
        render(<Wrapper><WorkOrder workOrder={mockWorkOrderNoTitleLocation} /></Wrapper>);
        expect(screen.getByText('(NO LOCATIONS)')).toBeInTheDocument;
    });

    it('should render with multiple locations', () => {
        render(<Wrapper><WorkOrder workOrder={mockWorkOrderMultipleLocations} /></Wrapper>);
        expect(screen.getByText('TEST LOCATION 1, TEST LOCATION 2')).toBeInTheDocument;
    });

    // status background colors

    it('should render status color default open', () => {
        render(<Wrapper><WorkOrder workOrder={mockWorkOrder} /></Wrapper>);
        expect(screen.getByTestId('status-chip')).toHaveStyle(`background-color: blue;`);
    });

    it('should render status color in progress', () => {
        render(<table><tbody><WorkOrder workOrder={Object.assign(mockWorkOrder, { status: 'IN_PROGRESS' })} /></tbody></table>);
        expect(screen.getByTestId('status-chip')).toHaveStyle(`background-color: yellow;`);
    });
});