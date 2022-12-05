import React from 'react'
import { CCol, CContainer, CHeader, CHeaderBrand, CRow, CButton } from '@coreui/react'
import { useNavigate, useLocation } from 'react-router-dom'
import CIcon from '@coreui/icons-react'
import { cilInfo, cilChevronLeft } from '@coreui/icons'

import BRISVI from 'src/assets/images/BRIxSVI.png'

const PertanyaanHeader = () => {
  const navigate = useNavigate()
  const currentLocation = useLocation().pathname
  const routeName = currentLocation.split('/')?.findLast((element) => element)
  return (
    <>
      <CHeader className="mb-4 border-0 flex-column">
        <CContainer fluid className="mb-5">
          <div>
            <CButton
              color="light"
              onClick={() => navigate(-1)}
              className="d-inline-block rounded-circle align-middle"
            >
              <CIcon icon={cilChevronLeft} />
            </CButton>

            <h3 className="d-inline-block align-middle mx-3 my-0">Pengisian Assessment</h3>
          </div>

          <CHeaderBrand>
            <img className="d-block w-100" src={BRISVI} alt="logo BRI x SVI" />
          </CHeaderBrand>
        </CContainer>

        {routeName === 'self-assessment-1' && (
          <CContainer lg fluid className="flex-column justify-content-start align-items-start ">
            <h4 className="">
              PETUNJUK: Pilih jawaban yang paling menggambarkan kompetensi Anda saat ini
            </h4>

            <p className="m-0">
              <b>Deskripsi Skor Penilaian</b>
            </p>

            <p className="m-0">
              <b>Skor 1:</b> Ya, saya dapat melakukan pekerjaan ini sebagian/seluruhnya dengan
              arahan atasan
            </p>

            <p className="m-0">
              <b>Skor 2:</b> Ya, saya dapat melakukan/mengimplementasikan pekerjaan ini sesuai
              prosedur secara mandiri
            </p>

            <p className="m-0">
              <b>Skor 3:</b> Ya, saya bahkan dapat melakukan analisis, baik berupa monitoring,
              identifikasi, evaluasi maupun investigasi dari pekerjaan ini
            </p>

            <p className="m-0">
              <b>Skor 4:</b> Ya, saya bahkan dapat melakukan pengelolaan tim dalam pekerjaan ini
            </p>

            <p className="m-0">
              <b>Skor 5:</b> Ya, saya bahkan dapat memimpin dan mengembangkan kebijakan, standar,
              ataupun framework dari pekerjaan ini
            </p>

            <p className="m-0">
              <b>Skor 6:</b> Ya, saya bahkan dapat memberi arahan strategis terkait pekerjaan ini
            </p>
          </CContainer>
        )}

        {routeName === 'self-assessment-2' && (
          <CContainer lg fluid className="flex-column justify-content-start align-items-start ">
            <h4 className="m-0">
              PETUNJUK: Pilih jawaban yang paling menggambarkan kemampuan dan pengalaman Anda saat
              ini
            </h4>

            <p className="m-0">Deskripsi Skor Penilaian</p>

            <p className="m-0">
              {
                'Skor 1: Saya memiliki pengalaman profesional yang signifikan (>= 85% dari semua kompetensi yang dijelaskan)'
              }
            </p>

            <p className="m-0">
              Skor 2: Saya secara teratur melakukan 50% - 85% dari kegiatan yang dijelaskan dengan
              hasil yang sukses dan konsisten
            </p>

            <p className="m-0">
              Skor 3: Saya memiliki pengetahuan yang relevan, tetapi belum berkesempatan untuk
              mengembangkan kompetensi tersebut
            </p>

            <p className="m-0">Skor 4: Saya tidak memiliki pengalaman terkait penjelasan ini</p>
          </CContainer>
        )}

        {routeName === 'duj-tools' && (
          <CContainer lg fluid className="flex-column justify-content-start align-items-start ">
            <h4 className="m-0">
              PETUNJUK: Berikan jawaban apakah pekerjaan tersebut merupakan pekerjaan Anda? dan
              adakah kesulitan dalam melakukan pekerjaan tersebut? Jawab dengan pilihan Ya atau
              Tidak (Y/T)
            </h4>
          </CContainer>
        )}

        {routeName === 'kebutuhan-training' && (
          <CContainer lg fluid className="flex-column justify-content-start align-items-start ">
            <h4 className="m-0">
              PETUNJUK: Berikan jawaban apakah training berikut diperlukan, lalu tandai mana yang
              diperlukan sertifikasi dengan menjawab Ya atau Tidak (Y/T)
            </h4>
          </CContainer>
        )}

        <CContainer lg fluid className="border-bottom pb-3" />
      </CHeader>

      <CContainer
        lg
        fluid
        className="d-flex flex-wrap justify-content-between align-items-center mb-4"
      >
        <CRow className="rounded-pill border border-light">
          <CCol xs={3} className="custom-breadcrum">
            <div className="text-nowrap my-2 align-middle">
              <span
                style={{ width: '1.5rem', height: '1.5rem' }}
                className={`breadcrum-number d-inline-block rounded-circle text-center align-text-bottom ${
                  routeName === 'self-assessment-1' && 'number-active'
                }`}
              >
                1
              </span>
              <span
                className={`breadcrum-text align-baseline mx-2 d-none d-md-inline ${
                  routeName === 'self-assessment-1' && 'text-active'
                }`}
              >
                Self Assessment 1
              </span>
            </div>
          </CCol>

          <CCol xs={3} className="custom-breadcrum">
            <div className="text-nowrap my-2 align-middle">
              <span
                style={{ width: '1.5rem', height: '1.5rem' }}
                className={`breadcrum-number d-inline-block rounded-circle text-center align-text-bottom ${
                  routeName === 'self-assessment-2' && 'number-active'
                }`}
              >
                2
              </span>
              <span
                className={`breadcrum-text align-baseline mx-2 d-none d-md-inline ${
                  routeName === 'self-assessment-2' && 'text-active'
                }`}
              >
                Self Assessment 2
              </span>
            </div>
          </CCol>

          <CCol xs={3} className="custom-breadcrum">
            <div className="text-nowrap my-2 align-middle">
              <span
                style={{ width: '1.5rem', height: '1.5rem' }}
                className={`breadcrum-number d-inline-block rounded-circle text-center align-text-bottom ${
                  routeName === 'duj-tools' && 'number-active'
                }`}
              >
                3
              </span>
              <span
                className={`breadcrum-text align-baseline mx-2 d-none d-md-inline ${
                  routeName === 'duj-tools' && 'text-active'
                }`}
              >
                DUJ & Tools
              </span>
            </div>
          </CCol>

          <CCol xs={3} className="custom-breadcrum">
            <div className="text-nowrap my-2 align-middle">
              <span
                style={{ width: '1.5rem', height: '1.5rem' }}
                className={`breadcrum-number d-inline-block rounded-circle text-center align-text-bottom ${
                  routeName === 'kebutuhan-training' && 'number-active'
                }`}
              >
                4
              </span>
              <span
                className={`breadcrum-text align-baseline mx-2 d-none d-md-inline ${
                  routeName === 'kebutuhan-training' && 'text-active'
                }`}
              >
                Kebutuhan Training
              </span>
            </div>
          </CCol>
        </CRow>

        <div className="my-2">
          <CButton
            color="white"
            size="sm"
            onClick={() => navigate('/self-assessment-soal/informasi-skill')}
            className="text-info"
          >
            <CIcon icon={cilInfo} size="sm" style={{ marginRight: '.25rem' }} />
            Informasi Skill
          </CButton>
        </div>
      </CContainer>
    </>
  )
}

export default PertanyaanHeader
