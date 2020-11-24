-- MySQL Workbench Synchronization
-- Generated: 2020-11-23 22:21
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: thiagolucio

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

ALTER SCHEMA `bdrest`  DEFAULT CHARACTER SET utf8  DEFAULT COLLATE utf8_general_ci ;

CREATE TABLE IF NOT EXISTS `bdrest`.`users` (
  `id_user` INT(11) NOT NULL AUTO_INCREMENT,
  `name_user` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_user`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = 'Tabela de usuarios ';

CREATE TABLE IF NOT EXISTS `bdrest`.`fornecedores` (
  `id_fornecedor` INT(11) NOT NULL AUTO_INCREMENT,
  `name_fornecedor` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id_fornecedor`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = 'Tabela de fornecedores';

CREATE TABLE IF NOT EXISTS `bdrest`.`animais` (
  `id_animal` INT(11) NOT NULL AUTO_INCREMENT,
  `name_animal` VARCHAR(45) NOT NULL,
  `id_user` INT(11) NOT NULL,
  PRIMARY KEY (`id_animal`),
  INDEX `fk_animais_users_idx` (`id_user` ASC),
  CONSTRAINT `fk_animais_users`
    FOREIGN KEY (`id_user`)
    REFERENCES `bdrest`.`users` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `bdrest`.`users_has_fornecedores` (
  `id_user` INT(11) NOT NULL,
  `id_fornecedor` INT(11) NOT NULL,
  PRIMARY KEY (`id_user`, `id_fornecedor`),
  INDEX `fk_users_has_fornecedores_fornecedores1_idx` (`id_fornecedor` ASC),
  INDEX `fk_users_has_fornecedores_users1_idx` (`id_user` ASC),
  CONSTRAINT `fk_users_has_fornecedores_users1`
    FOREIGN KEY (`id_user`)
    REFERENCES `bdrest`.`users` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_fornecedores_fornecedores1`
    FOREIGN KEY (`id_fornecedor`)
    REFERENCES `bdrest`.`fornecedores` (`id_fornecedor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

DROP TABLE IF EXISTS `bdrest`.`user` ;

DROP TABLE IF EXISTS `bdrest`.`fornecedor` ;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
