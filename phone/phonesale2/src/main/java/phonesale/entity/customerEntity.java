package phonesale.entity;

import java.sql.Date;
import java.util.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Entity
@Data
public class customerEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;

	private String password;

	private String number;

	private String address;

	private Date birth;

	private int role;

	@ManyToMany
	@JoinTable(name = "customer_product")
	@JsonIgnore
	private List<productEntity> products = new ArrayList<>();

}
