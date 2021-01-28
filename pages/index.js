import {useEffect} from 'react';
import axios from 'axios'
import Link from 'next/link'
const baseURL = 'https://dummyapi.io/data/api'
const Home = () => {
  return (
    <div class="container custom-scrollbar">
    <body>
      <header>
        <nav>
          <center>
            <div class="topnav">
                <Link href="/">
                  <button><h4><belgano>Home</belgano></h4></button>
                </Link>
                <Link href="Gallery">
                  <button><h4><belgano>Gallery</belgano></h4></button>
                </Link>
                <Link href="Contact">
                  <button><h4><belgano>Contact</belgano></h4></button>
                </Link>
                <Link href="GPAcal">
                  <button><h4><belgano>GPA calculator</belgano></h4></button>
                </Link>
                <Link href="post">
                  <button><h4><belgano>Posts</belgano></h4></button>
                </Link>
            </div>
          </center>
        </nav>
      </header>
      <center><h1><san>Home</san></h1></center>
      <table width="80%" align="center">
        <tbody>
          <tr>
            <td width="80%">
              <h1><san >Naruson Kanchina</san></h1>
              <h2><san >นายนฤสรณ์ กันจินะ</san></h2>
              <h3><san >naruson_k@cmu.ac.th</san></h3>
              <p><san >Computerengineering Chiangmai University</san></p>
            </td>
            <td align="center">
                <img src="002.jpg" width="210" height="280" />
            </td>
          </tr>
        </tbody>
      </table><br />
      <table width="80%" align="center" >
        <tbody>
          <tr align="center" >
            <td width="20%">
              <h2><san>ประวัติ</san></h2>
            </td>
            <td>
              <san ><br />
                เกิดวันที่ 5 เดือน กันยายน พ.ศ.2543 (5th September 2000) อายุ 20 ปี <br />
                ปัจจุบัน นักศึกษาปีที่ 2 คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์
              </san><hr />
            </td>
          </tr>
          <tr align="center" >
            <td width="20%">
              <h2><san>ความสามรถ</san></h2>
            </td>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h3 align="center"><san>ภาษา</san></h3>
                      <p>
                        <san >
                          พูดไทยและเหนือคล่องมาก <br /> อังกฤษได้นิดหน่อย ที่เหลือไม่ได้เลย
                        </san>
                      </p>
                    </td>
                    <td >
                      <h3 align="center" ><san>ภาษาคอมพิวเตอร์</san></h3>
                        <p>
                          <san>
                            C++, Css, Html, Java, python
                          </san>
                        </p>
                    </td>
                  </tr>
                </tbody>
              </table><hr  />
            </td>
          </tr>
          <tr align="center" >
            <td width="20%">
              <h2><san>ประสบการณ์</san></h2>
            </td>
            <td>
              <table >
                <tbody>
                  <tr>
                    <td>
                      <h2 align="left"><san>ปี 1</san></h2>
                      <h4><san>2019</san></h4>
                      <p>
                        <san>
                          เขียนโปรแกรมโดยใช้ภาษา C++ ทำรถเดินตามเส้นด้วย Gogo board
                        </san>
                      </p><hr />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h2 align="left"><san>ปี 2</san></h2>
                      <h4><san>2020</san></h4>
                      <p>
                        <san>
                          เขียนเกมโดยใช้ภาษา Java ทำนาฬิกาจับเวลาโดยใช้ IC ต่อวงจรไฟฟ้า
                        </san>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table><hr />
            </td>
          </tr>
          <tr  >
            <td width="20%" align="center">
              <h2><san>การศึกษา</san></h2>
            </td>
            <td>
                <h3 ><san >มหาวิทยาลัยเชียงใหม่ -เชียงใหม่, ประเทศไทย</san></h3>
                <h4 ><san >สาขาวิศวกรรมคอมพิวเตอร์</san></h4>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
        <p align="center" >
            <san >
               @2020 Naruson Kanchina  --
                <a href = "mailto:naruson_k@cmu.ac.th?subject = Feedback&body = Message" >
                  naruson_k@cmu.ac.th
                  </a>
            </san>
        </p>
    </body>
</div>
  )
}

export default Home
