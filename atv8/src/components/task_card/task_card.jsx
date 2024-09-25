import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const defaultTasks = [
    { name: 'tarefa 1', completed: true },
    { name: 'tarefa 2', completed: false },
    { name: 'tarefa 3', completed: false },
];

const Img = styled.img`
  width: 100%;
  display: inline-block;
  height: clamp(100px, 65vh, 130px);
  object-fit: cover;

  @media (min-width: 768px) {
    width: auto;
    height: 100%;
  }
`;

const Data = styled.div`
  margin: 10px 0 0 20px;

  & * {
    margin-top: 4px;
  }

  & *:first-child {
    margin-top: 0;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    & * {
      margin: 0;
    }

    & h2 {
      font-weight: normal;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.7);
  border-left: none;
  border-right: none;
  justify-content: space-around;
  padding: 7px 0;
  margin: 8px 0;

  @media (min-width: 768px) {
    flex-direction: column;
    border-bottom: none;
    border-top: none;
    padding: 30px;
  }
`;

const TasksCard = styled.div`
  width: 100vw;
  font-size: clamp(1.09rem, 1.34vw, 1.2rem);
  border: 1px solid black;
  display: inline-block;
`;

const TasksDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  text-align: center;
  margin: 0 10px 20px 10px;

  & * {
    border: 1px solid rgba(0, 0, 0, 0.4);
    padding: 6px;
  }

  & h3 {
    border: 1px solid black;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const FirstSec = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    border: 1px solid black;
    margin-bottom: 10px;
    font-size: 1.5rem;
  }
`;

const OuterIcons = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: stretch;
  }
`;

export default function TaskCard({
    completeName,
    birthDate,
    sector,
    cargo,
    tasks,
}) {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        function handleResize() {
            setIsDesktop(window.innerWidth >= 768);
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (!tasks || tasks.length === 0) {
        tasks = defaultTasks;
    }

    return (
        <TasksCard>
            <FirstSec>
                <Img src='https://placehold.co/400' />
                <Data>
                    <h2>{completeName || 'Nome completo'}</h2>
                    <p>{birthDate || 'Data de Nascimento'}</p>
                    <p>{sector || 'Setor'}</p>
                    <p>{cargo || 'Cargo'}</p>
                </Data>
                <OuterIcons>
                    <hr />
                    <Icons>
                        <PhoneIcon
                            fontSize='inherit
                            '
                        />
                        <EmailIcon fontSize='large' />
                        <LocationOnIcon fontSize='large' />
                    </Icons>
                    <hr />
                </OuterIcons>
                {!isDesktop && (
                    <>
                        <Icons>
                            <PhoneIcon fontSize='large' />
                            <EmailIcon fontSize='large' />
                            <LocationOnIcon fontSize='large' />
                        </Icons>
                    </>
                )}
            </FirstSec>
            <TasksDiv>
                <h3>Estado</h3>
                <h3>Tarefas</h3>
                {tasks.map((task, index) => (
                    <React.Fragment key={index}>
                        <div>
                            <input type='checkbox' checked={task.completed} disabled />
                        </div>
                        <span>{task.name}</span>
                    </React.Fragment>
                ))}
            </TasksDiv>
        </TasksCard>
    );
}

TaskCard.propTypes = {
    completeName: PropTypes.string,
    birthDate: PropTypes.string,
    sector: PropTypes.string,
    cargo: PropTypes.string,
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            completed: PropTypes.bool,
        }),
    ),
};
