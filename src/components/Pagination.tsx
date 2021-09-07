import React, {useState} from 'react';
import ReactPaginate from 'react-paginate';
import { nanoid as nano } from 'nanoid';
import { Col } from 'react-bootstrap';

import {Card} from './Card';

import '../App.css';
import {PlanetsData} from '../models/PlanetsData';

interface ChildComponentProps {
  data: PlanetsData[];
}

interface Selected {
  selected: number;
}

/**
 * @param {Object} props - An object.
 * @returns {JSX.Element} - Pagination component.
 */
export const Pagination: React.FC<ChildComponentProps> = (props:ChildComponentProps): JSX.Element =>{

  const [pageNumber, setPageNumber] = useState(0);
  const planetsPerPage = 10;
  const pagesVisited = pageNumber * planetsPerPage;

  const displayPlanets = props.data
    .slice(pagesVisited, pagesVisited + planetsPerPage)
    .map((planet: any) => (
      <Col xs="12" sm="6" lg="4" key={nano()}>
        <Card
          name={planet.name}
          diameter={planet.diameter}
          climates={planet.climates}
          terrains={planet.terrains}
          id={planet.id}
          active={false}
        />
      </Col>
    ));

  const pageCount = Math.ceil(
    props.data.length / planetsPerPage
  );

  /**
   * @param {Object} selected - SetValue data.
   */
  const changePage = (selected:Selected):React.SetStateAction<void> => {
    setPageNumber(selected.selected);
  };

  return (
    <>
      {displayPlanets}
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={pageCount}
        onPageChange={changePage}
        previousLinkClassName="previousBttn"
        nextLinkClassName="nextBttn"
        disabledClassName="paginationDisabled"
        containerClassName="pagination"
        activeClassName="paginationActive"
        marginPagesDisplayed={5}
        pageRangeDisplayed={5}
      />
    </>
  );
};
