package phonesale.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class productEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	
	private String memory;
	
	@Column(columnDefinition = "LONGTEXT")
	private String description;
	
	private String img;
	
	private Long price;
	
	private String type;

}
