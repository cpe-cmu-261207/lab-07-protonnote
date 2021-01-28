import Link from 'next/link'
const baseURL = 'https://dummyapi.io/data/api'
const Gallery = () => {
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
                <center><h1><san >Gallery</san></h1></center>
                <table width="80%" align="center" >
                    <tbody>
                        <tr>
                        <td width="80%">
                                <h1><san  >Naruson Kanchina</san></h1>
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
                            <tr align="center">
                                <td>
                                    <img src="001.jpg" alt height="227px" width="340px" />
                                </td>
                                <td>
                                    <img src="003.jpg" alt height="227px" width="340px" />
                                </td>
                                <td>
                                    <img src="004.jpg" alt height="227px" width="340px" />
                                </td>
                            </tr>
                            <tr align="center">
                                <td><san>
                                    คุณไข่เปิดของขวัญวันเกิด<br />
                                    "27 สิงหาคม 2540"
                                </san></td>
                                <td><san>
                                    วันเกิดคุณไข่<br />
                                    "27 สิงหาคม 2540"
                                </san></td>
                                <td><san>
                                    คุณไข่ขึ้นคอนเพลง<br />
                                    "River"
                                </san></td>
                            </tr>
                            <tr align="center" >
                                <td>
                                    <img src="005.jpg" alt height="227px" width="340px" />
                                </td>
                                <td>
                                    <img src="006.jpg" alt height="227px" width="340px" />
                                </td>
                                <td>
                                    <img src="007.jpg" alt height="227px" width="340px" />
                                </td>
                            </tr>
                            <tr align="center">
                                <td><san>
                                    แสดงเพลง
                                    <br />
                                    "River"
                                </san></td>
                                <td><san>
                                    วันถ่าย M/V
                                    <br />
                                    "เพลง Kimi wa Melody"
                                </san></td>
                                <td><san>
                                    ตอนกลับจากแสดงเพลง
                                    <br />
                                    "เพลง Kimi wa Melody"
                                </san></td><br />
                            </tr>
                            <tr align="center" >
                                <td>
                                <img src="008.jpg" alt height="227px" width="340px" />
                                </td>
                                <td>
                                <img src="009.jpg" alt height="227px" width="340px" />
                                </td>
                                <td>
                                <img src="010.jpg" alt height="227px" width="340px" />
                                </td>
                            </tr>
                            <tr align="center">
                                <td><san>
                                ชอบ
                                <br />
                                "Best part"
                                </san></td>
                                <td><san>
                                คุณไข่ลุคใส่เสื้อฮูด
                                <br />
                                "So cute"
                                </san></td>
                                <td><san>
                                มินิฮาร์ท
                                <br />
                                "Mini heart"
                                </san></td><br />
                            </tr>
                            <tr align="center" >
                                <td>
                                    <img src="011.jpg" alt height="227px" width="340px" />
                                </td>
                                <td>
                                    <img src="012.png" alt height="227px" width="340px" />
                                </td>
                                <td>
                                    <img src="013.jpg" alt height="227px" width="340px" />
                                </td>
                            </tr>
                            <tr align="center">
                                <td>
                                    <san>
                                        หยิกแก้ม
                                        <br />
                                        "ชอบบบบบบบ"
                                    </san>
                                </td>
                                <td><san>
                                    แอบโฆษณา Samsung
                                    <br />
                                    "ร้ายไม่เบา"
                                </san></td>
                                <td><san>
                                    แฮร่
                                    
                                    "หู้ยยยยยยยย"
                                </san></td><br />
                            </tr><br />
                        </tbody>
                    </table>
                    <br />
                    <p align="center">
                        <san >
                        @2020 Naruson Kanchina  --
                            <a href = "mailto:naruson_k@cmu.ac.th?subject = Feedback&body = Message">
                            naruson_k@cmu.ac.th
                            </a>
                        </san>
                    </p>
                </body>
        </div>
    )
  }
  
  export default Gallery
  