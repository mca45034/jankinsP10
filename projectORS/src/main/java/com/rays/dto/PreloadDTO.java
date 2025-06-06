package com.rays.dto;

import java.util.LinkedHashMap;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.rays.common.BaseDTO;

@Entity
@Table(name = "ST_PRELOAD")
public class PreloadDTO extends BaseDTO {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public static String YES = "Y";
	public static String NO = "N";
	public static String ACTIVE = "Active";
	public static String INACTIVE = "Inactive";

	@Column(name = "NAME", length = 50)
	
	private String name = null;

	@Column(name = "DESCRIPTION", length = 100)
	
	private String description = null;

	@Column(name = "STATE_NAME", length = 50)
	private String preloadName = null;

	@Column(name = "CAN_READ", length = 1)
	private String canRead = YES;

	@Column(name = "CAN_WRITE", length = 1)
	private String canWrite = YES;

	@Column(name = "CAN_UPDATE", length = 1)
	private String canUpdate = YES;

	@Column(name = "CAN_DELETE", length = 1)
	private String canDelete = YES;

	public static String getYES() {
		return YES;
	}

	public static void setYES(String yES) {
		YES = yES;
	}

	public static String getNO() {
		return NO;
	}

	public static void setNO(String nO) {
		NO = nO;
	}

	public static String getACTIVE() {
		return ACTIVE;
	}

	public static void setACTIVE(String aCTIVE) {
		ACTIVE = aCTIVE;
	}

	public static String getINACTIVE() {
		return INACTIVE;
	}

	public static void setINACTIVE(String iNACTIVE) {
		INACTIVE = iNACTIVE;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	
	public String getPreloadName() {
		return preloadName;
	}

	public void setPreloadName(String preloadName) {
		this.preloadName = preloadName;
	}

	public String getCanRead() {
		return canRead;
	}

	public void setCanRead(String canRead) {
		this.canRead = canRead;
	}

	public String getCanWrite() {
		return canWrite;
	}

	public void setCanWrite(String canWrite) {
		this.canWrite = canWrite;
	}

	public String getCanUpdate() {
		return canUpdate;
	}

	public void setCanUpdate(String canUpdate) {
		this.canUpdate = canUpdate;
	}

	public String getCanDelete() {
		return canDelete;
	}

	public void setCanDelete(String canDelete) {
		this.canDelete = canDelete;
	}

	public String getKey() {
		return id + "";
	}

	public String getValue() {
		return name;
	}

	@Override
	public LinkedHashMap<String, String> orderBY() {
		LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
		map.put("name", "asc");
		return map;
	}

	@Override
	public LinkedHashMap<String, Object> uniqueKeys() {
		LinkedHashMap<String, Object> map = new LinkedHashMap<String, Object>();
		map.put("name", name);
		return map;
	}

	@Override
	public String getUniqueKey() {
		// TODO Auto-generated method stub
		return "name";
	}

	@Override
	public String getUniqueValue() {
		// TODO Auto-generated method stub
		return "name";
	}

	@Override
	public String getLabel() {
		// TODO Auto-generated method stub
		return "Preload Name";
	}

}



