import React, { useState } from 'react'
import { useSearchParams } from 'react-router';
import InputSelect from '../../../components/forms/InputSelect';
import Button from '../../../components/Button';


const jurusanList = [
  { id: 1, name: 'Teknik Informatika' },
  { id: 2, name: 'Sistem Informasi' },
  { id: 3, name: 'Manajemen' },
  { id: 4, name: 'Akuntansi' },
  { id: 5, name: 'Ilmu Komunikasi' },
  { id: 6, name: 'Desain Komunikasi Visual' },
  { id: 7, name: 'Psikologi' },
  { id: 8, name: 'Hukum' },
  { id: 9, name: 'Kedokteran' },
  { id: 10, name: 'Farmasi' },
];

const statusList = [
  { id: 1, name: 'Draft' },
  { id: 2, name: 'Published' },
  { id: 3, name: 'Archived' },
];

const mahasiswaStatusList = [
  { id: 1, name: 'mahasiswa' },
  { id: 2, name: 'alumni' },
];

const semesterList = [
  { id: 1, name: 'semester 1' },
  { id: 2, name: 'semester 2' },
  { id: 3, name: 'semester 3' },
  { id: 4, name: 'semester 4' },
  { id: 5, name: 'semester 5' },
  { id: 6, name: 'semester 6' },
  { id: 7, name: 'semester 7' },
  { id: 8, name: 'semester 8' },
  { id: 9, name: 'semester 9' },
  { id: 10, name: 'semester 10' },
  { id: 11, name: 'semester 11' },
  { id: 12, name: 'semester 12' },
  { id: 13, name: 'semester 13' },
  { id: 14, name: 'semester 14' },
];

export default function Product () {
  const [ searchQueryParams, setSearchQueryParams ] = useSearchParams('');
  const [ badgeList, setBadgeList ] = useState([]);
  const [ isShowBadge, setIsShowBadge ] = useState(false);

  let jurusan = searchQueryParams.get('jurusan') || '';
  let status = searchQueryParams.get('status') || '';
  let semester = searchQueryParams.get('semester') || '';
  let mahasiswaStatus = searchQueryParams.get('mahasiswa_status') || '';

  function handleChange (e) {
    const { name, value } = e.target;

    setSearchQueryParams(prev => {
      const params = new URLSearchParams(prev);
      params.set(name, value);
      return params;
    });
  }

  function handleClickSearch (e) {
    e.preventDefault();
    setBadgeList([
      jurusan,
      status,
      semester,
      mahasiswaStatus,
    ]);

    setIsShowBadge(true);

    console.log(`jurusan : ${jurusan}`);
    console.log(`status : ${status}`);
    console.log(`semester ${semester}`);
    console.log(`mahasiswa_status : ${mahasiswaStatus}`);
  }

  function handleClickClear (e) {
    e.preventDefault();
    setSearchQueryParams({});
    jurusan = '';
    status = '';
    semester = '';
    mahasiswaStatus = '';
    setBadgeList([]);
    setIsShowBadge(false);
  }
  
  return (
    <>
      <div className="text-2xl font-bold my-4">Product</div>
      <form>
        <div className="md:flex gap-5">
          {/* * jurusan */}
          <div className="my-5">
            <InputSelect
              inputName="jurusan"
              id="jurusan"
              inputValue={jurusan}
              handleOnChange={handleChange}
            >
              {jurusanList.map(jur => (
                <option key={jur.id} value={jur.name}>
                  {jur.name}     
                </option>
              ))}
            </InputSelect>
          </div>

          {/* * semester */}
          <div className="my-5">
            <InputSelect
              inputName="semester"
              id="semester"
              inputValue={semester}
              handleOnChange={handleChange}
            >
              {semesterList.map(sms => (
                <option key={sms.id} value={sms.name}>
                  {sms.name}
                </option>
              ))}
            </InputSelect>
          </div>

          {/* * mahasiswa status */}
          <div className="my-5">
            <InputSelect
              inputName="mahasiswa_status"
              id="mahasiswa_status"
              inputValue={mahasiswaStatus}
              handleOnChange={handleChange}
            >
              {mahasiswaStatusList.map(mhsStatus => (
                <option key={mhsStatus.id} value={mhsStatus.name}>
                  {mhsStatus.name}
                </option>
              ))}
            </InputSelect>
          </div>

          {/* * status */}
          <div className="my-5">
            <InputSelect 
              inputName="status"
              id="status"
              inputValue={status}
              handleOnChange={handleChange}
            >
              {statusList.map(status => (
                <option key={status.id} value={status.name}>
                  {status.name}
                </option>
              ))}
            </InputSelect>
          </div>
        </div>
        <div className="mx-2 my-4">
          <Button 
            handleClickSearch={handleClickSearch}
            buttonText="Search"
            buttonStatus="primary"
          />
          <Button 
            handleClickSearch={handleClickClear}
            buttonText="Clear"
            buttonStatus="secondary"
          />
        </div>
      </form>
      <Badge isShowBadge={isShowBadge} badgeList={badgeList} />
    </>
  );
}

function Badge ({ isShowBadge, badgeList }) {
  return (
    <>
      { isShowBadge && (
        <div className="flex flex-wrap gap-2 mt-4">
          { badgeList.map((badge, index) => (
            badge && (
              <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-4 py-2 rounded-xl dark:bg-blue-900 dark:text-blue-300">
                { badge }
              </span>
            )
          ))}
        </div>
      )}
    </>
  );
}