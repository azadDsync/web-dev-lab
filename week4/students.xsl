<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
    <body>
      <h2>Student Details</h2>
      <table border="1">
        <tr bgcolor="#9acd32">
          <th>Name</th>
          <th>Roll</th>
          <th>Branch</th>
        </tr>
        <tr>
          <td><xsl:value-of select="students/student/name"/></td>
          <td><xsl:value-of select="students/student/roll"/></td>
          <td><xsl:value-of select="students/student/branch"/></td>
        </tr>
      </table>
    </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
