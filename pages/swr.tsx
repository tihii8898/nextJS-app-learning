import { useState } from 'react';
import { StudentDetail } from '~/components/swr';

export interface SWRPageProps {}

export default function SWRPage(props: SWRPageProps) {
  const [detailList, setDetailList] = useState([1, 1, 1]);

  function handleAddClick() {
    setDetailList((prevList) => [...prevList, 1]);
  }

  return (
    <div>
      <h1>SWR Playground</h1>
      <button onClick={handleAddClick}>Add</button>

      <ul>
        {detailList.map((detail, index) => (
          <li key={index}>
            <StudentDetail studentId="sktwi1cgkkuif36f3" />
          </li>
        ))}
      </ul>
    </div>
  );
}
