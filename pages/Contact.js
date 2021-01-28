import Link from 'next/link'
const baseURL = 'https://dummyapi.io/data/api'
const Contact = () => {
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
                <center><h1><san >Contact</san></h1></center>
                <table width="80%" align="center" >
                    <tbody><tr>
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
            </tbody></table>
            <br />
            <form >
                <table width="80%" align="center" >
                    <tbody>
                        <tr>
                            <tr>
                                <td>
                                    <h4>
                                        <label><san >เรื่อง:</san></label>
                                    </h4>
                                </td>
                                <td>
                                    <input type="text" name="subject" value width="50px" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <label><san >ข้อความ:</san></label>
                                    </h4>
                                </td>
                                <td>
                                    <textarea type="text"  name="massage" value width="50px" ></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <label><san >ชื่อ:</san></label>
                                    </h4>
                                </td>
                                <td>
                                    <input type="text" name="name" value width="50px" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <label><san >เพศ:</san></label>
                                    </h4>
                                </td>
                                <td>
                                    <form>
                                        <input type="radio" id="male" name="gender" value="male" />
                                        <label for="male"><san>ชาย</san></label>
                                        <input type="radio" id="female" name="gender" value="female" />
                                        <label for="female"><san>หญิง</san></label>
                                    </form>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <label><san >โทรศัพท์:</san></label>
                                    </h4>
                                </td>
                                <td>
                                    <input type="text" name="phone" value width="50px" />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>
                                        <label><san >อีเมล:</san></label>
                                    </h4>
                                </td>
                                <td>
                                    <input type="text" name="email" value width="50px" />
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <submit><input width="80%" type="submit" name="submit" value="submit" /></submit>
                                </td>
                            </tr>
                        </tr>
                    </tbody>
                </table>
            </form>
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
  
  export default Contact
  