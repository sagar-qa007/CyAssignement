import React from 'react';
import { render, screen } from '@testing-library/react';
import { WorkOrderDetails } from '../components/WorkOrders';
import { useParams } from 'react-router-dom';

import jsonData from '../stubs/workOrders.json';

jest.mock('../stubs/workOrders.json');

jsonData.data = {
    workOrders: [
        {
            id: 'testId01',
            number: '0989',
            title: 'test title',
            description: 'test description',
            priority: 'test priority',
            category: 'test category',
            updatedAt: new Date(2021, 0, 2),
            createdAt: new Date(2021, 0, 3),
            location: [
                {
                    "name": "Test Location 1",
                }
            ]
        },
        {
            id: 'testId02',
            number: '0989',
            priority: 'test priority',
            category: 'test category',
            updatedAt: new Date(2021, 0, 2),
            createdAt: new Date(2021, 0, 3),
        },
        {
            id: 'testId03',
            number: '0989',
            title: 'test title',
            description: 'test description',
            priority: 'test priority',
            category: 'test category',
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
        },
    ]
};

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(),
}))

describe('WorkOrderDetails', () => {

    it('should render title', () => {
        useParams.mockReturnValue({ id: 'testId01' })

        render(<WorkOrderDetails />);
        expect(screen.getByText('test title')).toBeInTheDocument;
    });

    it('should render work order number', () => {
        useParams.mockReturnValue({ id: 'testId01' })

        render(<WorkOrderDetails />);
        expect(screen.getByText('#0989')).toBeInTheDocument;
    });

    it('should render updatedAt', () => {
        useParams.mockReturnValue({ id: 'testId01' })

        render(<WorkOrderDetails />);
        expect(screen.getByText('Updated: 01/02/21 12:00:00 am')).toBeInTheDocument;
    });

    it('should render description', () => {
        useParams.mockReturnValue({ id: 'testId01' })

        render(<WorkOrderDetails />);
        expect(screen.getByText('test description')).toBeInTheDocument;
    });

    it('should render priority', () => {
        useParams.mockReturnValue({ id: 'testId01' })

        render(<WorkOrderDetails />);
        expect(screen.getByText('test priority')).toBeInTheDocument;
    });

    it('should render category', () => {
        useParams.mockReturnValue({ id: 'testId01' })

        render(<WorkOrderDetails />);
        expect(screen.getByText('test category')).toBeInTheDocument;
    });

    it('should render createdAt', () => {
        useParams.mockReturnValue({ id: 'testId01' })

        render(<WorkOrderDetails />);
        expect(screen.getByText('01/03/21 12:00:00 am')).toBeInTheDocument;
    });

    it('should render locations', () => {
        useParams.mockReturnValue({ id: 'testId01' })

        render(<WorkOrderDetails />);
        expect(screen.getByText('Test Location 1')).toBeInTheDocument;
    });

    // missing fields

    it('should render with missing title', () => {
        useParams.mockReturnValue({ id: 'testId02' })

        render(<WorkOrderDetails />);
        expect(screen.getByText('(No Title)')).toBeInTheDocument;
    });

    it('should render with missing location', () => {
        useParams.mockReturnValue({ id: 'testId02' })

        render(<WorkOrderDetails />);
        expect(screen.getByText('(No Locations)')).toBeInTheDocument;
    });

    // multiple locations

    it('should render with missing location', () => {
        useParams.mockReturnValue({ id: 'testId03' })

        render(<WorkOrderDetails />);
        expect(screen.getByText('Test Location 1, Test Location 2')).toBeInTheDocument;
    });

    // non-existent id param
    it('should render ID does not exist', () => {
        useParams.mockReturnValue({ id: 'bogusId' })

        render(<WorkOrderDetails />);
        expect(screen.getByText('This work order ID does not exist')).toBeInTheDocument;
    });

});