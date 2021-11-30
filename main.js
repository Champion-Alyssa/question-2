/*
 * Project: Question Two
 * File Name: main.js
 * Description:
 *
 * Created Date: 11/30/2021
 * Author: Alyssa Champion
 *
 */

const IOhandler = require("./IOhandler"),
  zipFilePath = `${__dirname}/myfile.zip`,
  pathUnzipped = `${__dirname}/unzipped`,
  pathProcessed = `${__dirname}/grayscaled`;


  IOhandler.unzip(zipFilePath, pathUnzipped)
  .then(() => IOhandler.readDir(pathUnzipped))
  .then((files) => IOhandler.grayScale(files, pathProcessed))
  .catch((err) => console.log(err));